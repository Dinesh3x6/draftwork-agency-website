require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Prisma client if DATABASE_URL is configured
let prisma = null;
if (process.env.DATABASE_URL) {
  try {
    prisma = new PrismaClient();
  } catch (err) {
    console.error('[DATABASE] Failed to initialize PrismaClient:', err.message);
  }
} else {
  console.warn('[DATABASE] DATABASE_URL is not set in environment. PostgreSQL persistence requires DATABASE_URL.');
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Static asset serving
app.use(express.static(path.join(__dirname)));

// Rate Limiter for Inquiry API (max 5 requests per 15 minutes per IP)
const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many inquiries submitted from this IP. Please try again after 15 minutes.'
  }
});

// Helper for validating email format
function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// Helper for sending founder email notification
async function sendFounderNotification(inquiry) {
  const founderEmail = process.env.FOUNDER_EMAIL || 'draftwork30@gmail.com';

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    console.warn('[EMAIL] SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASSWORD) not fully configured. Email notification skipped.');
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass }
  });

  const mailOptions = {
from: `"Draftwork Inquiries" <draftwork30@gmail.com>`,    to: founderEmail,
    subject: `New Project Inquiry — ${inquiry.projectType}`,
    text: `NEW PROJECT INQUIRY\n\n` +
      `Name:\n${inquiry.name}\n\n` +
      `Company:\n${inquiry.company || 'N/A'}\n\n` +
      `Email:\n${inquiry.email}\n\n` +
      `Phone:\n${inquiry.phone || 'N/A'}\n\n` +
      `Project Type:\n${inquiry.projectType}\n\n` +
      `Expected Timeline:\n${inquiry.expectedTimeline || 'N/A'}\n\n` +
      `Reference Website:\n${inquiry.referenceWebsite || 'N/A'}\n\n` +
      `Project Description:\n${inquiry.projectDescription}\n\n` +
      `Required Features:\n${inquiry.requiredFeatures || 'N/A'}\n\n` +
      `Submitted:\n${new Date(inquiry.createdAt || Date.now()).toISOString()}\n`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[EMAIL] Founder notification email sent successfully. MessageID:', info.messageId);
    return true;
  } catch (err) {
    console.error('[EMAIL] Failed to send founder notification email:', err.message);
    return false;
  }
}

// Inquiry Endpoint
app.post('/api/inquiries', inquiryLimiter, async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      projectType,
      expectedTimeline,
      referenceWebsite,
      projectDescription,
      requiredFeatures
    } = req.body || {};

    // 1. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Please enter your name.' });
    }
    if (name.trim().length > 100) {
      return res.status(400).json({ success: false, message: 'Name must not exceed 100 characters.' });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    if (!projectType || typeof projectType !== 'string' || projectType.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Please select a project type.' });
    }

    if (!projectDescription || typeof projectDescription !== 'string' || projectDescription.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Please enter a project description.' });
    }
    if (projectDescription.trim().length > 5000) {
      return res.status(400).json({ success: false, message: 'Project description must not exceed 5000 characters.' });
    }

    const sanitizedInquiryData = {
      name: name.trim(),
      company: company && typeof company === 'string' ? company.trim() : null,
      email: email.trim().toLowerCase(),
      phone: phone && typeof phone === 'string' ? phone.trim() : null,
      projectType: projectType.trim(),
      expectedTimeline: expectedTimeline && typeof expectedTimeline === 'string' ? expectedTimeline.trim() : null,
      referenceWebsite: referenceWebsite && typeof referenceWebsite === 'string' ? referenceWebsite.trim() : null,
      projectDescription: projectDescription.trim(),
      requiredFeatures: requiredFeatures && typeof requiredFeatures === 'string' ? requiredFeatures.trim() : null,
      status: 'NEW'
    };

    let savedRecord = null;

    // 2. Save inquiry to PostgreSQL (if Prisma / DB configured)
    if (prisma) {
      try {
        savedRecord = await prisma.projectInquiry.create({
          data: sanitizedInquiryData
        });
        console.log('[INQUIRY] Stored inquiry in PostgreSQL. Record ID:', savedRecord.id);
      } catch (dbErr) {
        console.error('[INQUIRY] PostgreSQL database store error:', dbErr.message);
        // DB save failed: return error and DO NOT send email
        return res.status(500).json({
          success: false,
          message: 'Something went wrong while submitting your inquiry. Please try again.'
        });
      }
    } else {
      console.log('[INQUIRY] Received inquiry payload:', sanitizedInquiryData.email, sanitizedInquiryData.projectType);
      savedRecord = {
        ...sanitizedInquiryData,
        id: 'inq_' + Date.now(),
        createdAt: new Date()
      };
    }

    // 3. Send email notification to founder (after DB save)
    await sendFounderNotification(savedRecord);

    // 4. Return success response to visitor
    return res.status(200).json({
      success: true,
      message: "Thank you! Your project inquiry has been received. We'll get back to you soon."
    });

  } catch (err) {
    console.error('[SERVER] Unexpected error in /api/inquiries:', err.message);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while submitting your inquiry. Please try again.'
    });
  }
});

// Fallback for non-API GET requests -> index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`[SERVER] Draftwork server listening on port ${PORT}`);
});
