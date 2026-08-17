/* ===================== DATA ===================== */

const SERVICES = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    title: "Student Portfolio Websites",
    desc: "Professional portfolio websites for students, graduates and job seekers to present skills for internships and placements.",
    features: ["Personal intro & bio", "Skills & resume display", "Projects & repositories", "Education & achievements"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    title: "Personal Portfolio Websites",
    desc: "Modern personal websites for developers, designers, freelancers and professionals to build a strong online presence.",
    features: ["Personal branding", "About & background", "Work & case studies", "Experience & resume"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    title: "Business Websites",
    desc: "Modern responsive websites for businesses, startups and organizations to establish a professional digital presence.",
    features: ["Professional branding", "Services & about overview", "Client inquiries & contact", "Fast & responsive design"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    title: "E-Commerce Websites",
    desc: "Modern online storefronts for businesses that want to sell products online with structured catalog and cart experience.",
    features: ["Product listings & catalog", "Product details & galleries", "Shopping cart experience", "Order management flow"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    title: "Web Applications",
    desc: "Custom web applications designed around specific business workflows, management needs, and operational tools.",
    features: ["Dashboards & management", "Tracking & booking systems", "Internal business tools", "Scalable SaaS platforms"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"></path></svg>`,
    title: "AI-Powered Web Applications",
    desc: "Web applications that integrate AI capabilities where useful for intelligent workflows and user assistance.",
    features: ["AI assistants & chatbots", "Workflow automation", "Content generation tools", "Intelligent API integrations"]
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    title: "Custom Web Solutions",
    desc: "Custom-built websites and applications based on your specific requirements from discovery to deployment and support.",
    features: ["Understand requirements", "Design experience & UI", "Build & test application", "Deploy & ongoing support"]
  }
];

const PROCESS = [
  {n:"01", t:"Discovery", d:"Understand the customer's business, target audience, requirements and goals."},
  {n:"02", t:"Planning", d:"Define features, technology stack, architecture, timeline and project scope."},
  {n:"03", t:"UI/UX Design", d:"Create wireframes, user flows and high-fidelity responsive designs."},
  {n:"04", t:"Development", d:"Build the frontend, backend, database, APIs and required integrations."},
  {n:"05", t:"Testing", d:"Perform functional, responsive, performance, security and cross-browser testing."},
  {n:"06", t:"Deployment", d:"Deploy the project to production, configure domain, SSL, hosting and environment variables."},
  {n:"07", t:"Launch", d:"Make the product available to customers and monitor the production environment."},
  {n:"08", t:"Support", d:"Provide maintenance, updates, improvements and technical support."},
];

const PROJECTS = [
  {
    id: 1,
    name: "PAYBACK-PRO",
    subtitle: "Personal Lending & Smart Repayment Reminder Platform",
    industry: "Personal Finance / Money Management",
    cat: "Web Apps",
    status: "Live",
    desc: "Track lending, monitor repayments, and send smarter payment reminders.",
    img: "img/proj-payback.jpg",
    liveUrl: "https://payback-pro.vercel.app/",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "UPI"],
    realStack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Nodemailer", "UPI QR", "Node-Cron"],
    case: {
      overview: "PAYBACK-PRO is a full-stack personal money management application designed to help users track money they have lent to others, manage repayments, and send smart payment reminders.",
      problem: "When people lend money to multiple individuals, it can become difficult to remember who owes money, how much they owe, how much has already been paid, what amount remains, when a payment is due, and when a reminder was last sent.",
      solution: "PAYBACK-PRO combines Borrower Management, Repayment Tracking, Real-Time Analytics, and Smart Reminders into a single platform.",
      features: [
        "01 — User Registration & Auth: Secure user accounts and authentication",
        "02 — Borrower Management: Add, edit, filter and search borrower records",
        "03 — Repayment & Balance Tracking: Track total amount, paid amount, and remaining balances in real time",
        "04 — Smart Reminders & UPI: Automatic (Daily, Weekly, Monthly) and instant reminders with dynamic UPI QR code generation"
      ],
      workflow: ["LOAN LENT", "PAYMENT RECORDED", "TOTAL PAID", "REMAINING BALANCE", "SMART REMINDER", "UPI PAYMENT"],
      highlights: [
        { t: "Lending Management", d: "Track borrowers and lending details in one clean dashboard." },
        { t: "Repayment Tracking", d: "Monitor total paid, remaining balance, and repayment progress." },
        { t: "Smart Reminders", d: "Automatic scheduled (Daily, Weekly, Monthly) and instant reminders." },
        { t: "Dynamic UPI Integration", d: "Includes direct UPI payment links and dynamic QR code generation." }
      ],
      story: {
        challenge: "Tracking multiple personal lending relationships manually makes repayment monitoring and follow-ups difficult.",
        approach: "Build a centralized full-stack application combining borrower management, repayment tracking, analytics and automated reminders.",
        result: "A structured platform where lending information, repayments, reminders and payment progress are managed effortlessly in one place."
      },
      disclaimer: "PAYBACK-PRO simplifies personal lending tracking and reminder scheduling.",
      facts: ["Personal Finance", "Lending Tracking", "Smart Reminders", "Dynamic UPI QR", "Full-Stack SaaS"]
    }
  },
  {
    id: 2,
    name: "GST Garment",
    subtitle: "GST-Ready Garment Invoicing & Compliance",
    industry: "GST Invoicing & Compliance",
    cat: "Web Apps",
    status: "Live",
    desc: "Simplifying GST calculations and HSN-based invoicing for garment businesses.",
    img: "img/proj-gst-garment.jpg",
    liveUrl: "https://gst-garment.vercel.app/",
    tech: ["GST Invoicing", "HSN", "Garment", "Tax Calculation", "Web Application"],
    realStack: ["JavaScript", "HTML5", "CSS3", "Vercel Deployment"],
    case: {
      overview: "GST Garment is a web application focused on simplifying GST-related invoicing for garment and textile businesses. The system helps users calculate applicable GST rates and generate invoices containing HSN codes relevant to textile and clothing products.",
      problem: "Garment businesses may need to deal with different GST rates and product classifications while creating invoices. Manual calculations can make billing slower and increase the possibility of mistakes. GST Garment was designed to make this workflow simpler and more structured.",
      solution: "The application brings GST calculation and garment-focused invoicing into a single workflow.",
      features: [
        "01 — GST Calculation: Calculate GST based on the applicable tax rate configured for the product.",
        "02 — Garment/Textile Tax Handling: Support garment-oriented GST scenarios involving rates such as 5% and 12%, based on the application's configured rules.",
        "03 — HSN Codes: Include HSN codes in invoices for relevant textile and clothing products.",
        "04 — Invoice Generation: Generate structured invoices containing the relevant billing and tax information."
      ],
      workflow: ["PRODUCT", "PRICE", "GST RATE", "TAX CALCULATION", "HSN CODE", "FINAL INVOICE"],
      highlights: [
        { t: "GST Calculation", d: "Automated tax calculation based on configured rates." },
        { t: "HSN Integration", d: "HSN codes included in garment/textile invoices." },
        { t: "Garment Focused", d: "Designed around invoicing requirements for garment businesses." },
        { t: "Structured Billing", d: "Clear invoice information and tax breakdown." }
      ],
      story: {
        challenge: "Garment businesses need to manage product pricing, GST calculations and HSN classification while preparing invoices.",
        approach: "Build a focused web application that simplifies the GST calculation and invoice-generation workflow.",
        result: "A garment-oriented invoicing experience that brings GST calculation and HSN-based invoice information into one application."
      },
      disclaimer: "GST rates and rules shown are based on the application's configured logic.",
      facts: ["GST Calculation", "HSN-Based Invoicing", "Garment Focused", "Web Application"]
    }
  }
];

const TECH = [
  {cat:"Frontend", items:["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS"]},
  {cat:"Backend", items:["Node.js","Express.js"]},
  {cat:"Database", items:["PostgreSQL","MySQL","MongoDB"]},
  {cat:"Tools & Services", items:["Git & GitHub","REST APIs","Firebase","Cloud Platforms","Payment Gateways","AI APIs"]},
];

const CX = [
  {n:"01", t:"Clear Communication", d:"Regular project updates and transparent communication."},
  {n:"02", t:"Transparent Development", d:"You understand what is being built and why, at every stage."},
  {n:"03", t:"Responsive Design", d:"The product works across mobile, tablet and desktop."},
  {n:"04", t:"Performance", d:"Fast loading and optimized user experience by default."},
  {n:"05", t:"Security", d:"Secure authentication, data handling and production configuration."},
  {n:"06", t:"Quality Testing", d:"Testing before delivery to reduce bugs and post-launch issues."},
  {n:"07", t:"Revisions", d:"Reasonable design and functionality revisions during development."},
  {n:"08", t:"Post-Launch Support", d:"We stay involved after your website goes live."},
];

const WHY = [
  "Business-focused development, not just code for its own sake.",
  "A modern, actively maintained technology stack.",
  "Clean, considered UI/UX on every screen.",
  "Architecture built with performance in mind from day one.",
  "Security treated as a requirement, not an afterthought.",
  "Transparent communication throughout the project.",
  "Flexible solutions that fit your actual constraints.",
  "Long-term support after your product goes live.",
];

const JOURNEY = ["You Have an Idea","We Understand It","We Design It","We Build It","We Test It","We Launch It","We Support It"];

const FAQS = [
  {q:"How does the development process work?", a:"We move through eight stages — discovery, planning, design, development, testing, deployment, launch and support — with regular check-ins at each one so you always know what's happening."},
  {q:"How long does a website take to build?", a:"A simple business website typically takes 2–4 weeks. Custom web applications usually take 6–12 weeks depending on scope. We give you a specific estimate after discovery."},
  {q:"How much does a website cost?", a:"It depends on scope, features and integrations. We provide a custom quote after understanding your requirements — see our packages above for a general starting point."},
  {q:"Do you provide UI/UX design?", a:"Yes. Every project includes wireframes and high-fidelity design before development begins, so you can review the direction before we build."},
  {q:"Can you build custom web applications?", a:"Yes — dashboards, SaaS platforms, internal tools and management systems are a core part of what we do, not an add-on."},
  {q:"Do you provide hosting and deployment?", a:"Yes. We handle domain setup, SSL, hosting and production deployment as part of every project."},
  {q:"Can you integrate payment gateways?", a:"Yes, including Stripe, PayPal and other major providers, along with the order and receipt logic around them."},
  {q:"Can you integrate APIs?", a:"Yes — payment, maps, email, authentication, AI and other third-party APIs are all things we integrate regularly."},
  {q:"Do you provide maintenance after launch?", a:"Yes. Our support packages cover bug fixes, security updates, performance improvements and ongoing changes."},
  {q:"Can I request changes during development?", a:"Yes — reasonable revisions are expected and built into our process, particularly around the design phase."},
  {q:"Do you provide SEO?", a:"Yes, we implement on-page SEO fundamentals — semantic markup, metadata, performance and structure — on every project."},
  {q:"Can you redesign an existing website?", a:"Yes. We can rebuild an existing site with a new design, modern stack, or both, while preserving what already works."},
  {q:"Can you integrate AI features?", a:"Yes — chat assistants, automation and recommendation features are part of our AI integration service."},
  {q:"How do I start a project?", a:"Fill out the project request form below, or reach out directly by email or WhatsApp — we'll follow up within one business day."},
];

/* ===================== RENDER ===================== */

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}

// Services
const servicesGrid = document.getElementById('servicesGrid');
SERVICES.forEach(s=>{
  const card = el('div','blueprint-card svc-card reveal');
  card.innerHTML = `
    <div class="svc-icon">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
    <ul class="svc-features">${s.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <a href="#contact" class="svc-link">Learn More →</a>
  `;
  servicesGrid.appendChild(card);
});

// Process
const timeline = document.getElementById('timeline');
PROCESS.forEach(p=>{
  const step = el('div','tl-step reveal');
  step.innerHTML = `<div class="tl-num">${p.n}</div><h3>${p.t}</h3><p>${p.d}</p>`;
  timeline.appendChild(step);
});

// Projects + filters
const CATS = ["All", "Web Apps"];
const filterRow = document.getElementById('filterRow');
const projectsGrid = document.getElementById('projectsGrid');
let activeCat = "All";

function catMatches(cat, projCat) {
  if (cat === 'All') return true;
  return cat === projCat;
}

function renderProjects(){
  projectsGrid.innerHTML = '';
  PROJECTS.filter(p => catMatches(activeCat, p.cat)).forEach((p, idx)=>{
    const card = el('div','blueprint-card proj-card reveal in');
    const liveBtnHtml = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline card-live-btn" onclick="event.stopPropagation();">Live Project ↗</a>` 
      : '';

    card.innerHTML = `
      <div class="proj-thumb">
        <img src="${p.img}" alt="${p.name} — ${p.industry} project" loading="lazy">
        <span class="status">${p.status}</span>
      </div>
      <div class="proj-body">
        <div class="proj-card-header">
          <span class="ind">${p.industry}</span>
          ${idx === 0 ? '<span class="chip-mini">FEATURED CASE STUDY</span>' : ''}
        </div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="tag-row">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="proj-card-actions">
          <button class="btn btn-primary card-study-btn">View Case Study</button>
          ${liveBtnHtml}
        </div>
      </div>
    `;
    card.addEventListener('click', ()=> openProjectModal(p));
    projectsGrid.appendChild(card);
  });
  if (typeof observeReveals === 'function') observeReveals();
}

CATS.forEach(c=>{
  const btn = el('button','filter-btn'+(c==='All'?' active':''), c);
  btn.addEventListener('click', ()=>{
    activeCat = c;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects();
  });
  filterRow.appendChild(btn);
});
renderProjects();

// Project modal
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function trapFocus(element) {
  const focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  
  function handler(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  element._focusTrapHandler = handler;
  element.addEventListener('keydown', handler);
  first.focus();
}

function releaseFocusTrap(element) {
  if (element._focusTrapHandler) {
    element.removeEventListener('keydown', element._focusTrapHandler);
    delete element._focusTrapHandler;
  }
}

function openProjectModal(p){
  // Detailed custom modal rendering for structured case studies (PAYBACK-PRO & GST Garment)
  if (p.case && p.case.workflow) {
    modalContent.innerHTML = `
      <button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>

      <!-- Case Study Hero Header -->
      <div class="cs-hero-header">
        <span class="cs-label mono">CASE STUDY / 0${p.id}</span>
        <h2 class="cs-title">${p.name}</h2>
        <p class="cs-subtitle">${p.subtitle}</p>
        <div class="cs-meta-row">
          <span class="cs-badge">${p.industry}</span>
          <span class="cs-badge cs-badge-status">${p.status}</span>
        </div>
      </div>

      <!-- Project Hero Visual -->
      <div class="cs-hero-image-wrap">
        <img src="${p.img}" alt="${p.name} application preview" loading="lazy">
      </div>

      <!-- Overview -->
      <div class="modal-section">
        <h4>Overview</h4>
        <p>${p.case.overview}</p>
      </div>

      <!-- The Problem -->
      <div class="modal-section">
        <h4>The Problem</h4>
        <p>${p.case.problem}</p>
      </div>

      <!-- The Solution & Core Features -->
      <div class="modal-section">
        <h4>The Solution</h4>
        <p style="margin-bottom:12px;">${p.case.solution}</p>
        <ul class="svc-features cs-feature-list">
          ${p.case.features.map(f=>`<li>${f}</li>`).join('')}
        </ul>
      </div>

      <!-- Feature Workflow Visualization -->
      <div class="modal-section">
        <h4>Invoicing Workflow</h4>
        <p class="mono" style="font-size:12px; color:var(--muted); margin-bottom:14px;">PRODUCT PROCESS &amp; TAX FLOW</p>
        <div class="cs-workflow-container">
          ${p.case.workflow.map((wf, i) => `
            <div class="cs-workflow-step">
              <span class="cs-wf-idx">0${i+1}</span>
              <span class="cs-wf-name">${wf}</span>
            </div>
            ${i < p.case.workflow.length - 1 ? '<div class="cs-wf-arrow">→</div>' : ''}
          `).join('')}
        </div>
      </div>

      <!-- Highlights Grid -->
      <div class="modal-section">
        <h4>Project Highlights</h4>
        <div class="cs-highlights-grid">
          ${p.case.highlights.map(h => `
            <div class="cs-highlight-card">
              <h5>${h.t}</h5>
              <p>${h.d}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Factual Characteristics -->
      <div class="modal-section">
        <h4>Factual Characteristics</h4>
        <div class="tag-row" style="margin-top:8px;">
          ${p.case.facts.map(fact => `<span class="tag tag-accent">${fact}</span>`).join('')}
        </div>
      </div>

      <!-- Real Technology Stack -->
      <div class="modal-section">
        <h4>Technology Stack</h4>
        <div class="tag-row" style="margin-top:8px;">
          ${p.realStack.map(stk => `<span class="tag">${stk}</span>`).join('')}
        </div>
      </div>

      <!-- Project Story (Challenge / Approach / Result) -->
      <div class="modal-section">
        <h4>Project Story</h4>
        <div class="cs-story-grid">
          <div class="cs-story-col">
            <span class="cs-story-lbl mono">CHALLENGE</span>
            <p>${p.case.story.challenge}</p>
          </div>
          <div class="cs-story-col">
            <span class="cs-story-lbl mono">APPROACH</span>
            <p>${p.case.story.approach}</p>
          </div>
          <div class="cs-story-col">
            <span class="cs-story-lbl mono">RESULT</span>
            <p>${p.case.story.result}</p>
          </div>
        </div>
      </div>

      <!-- GST Disclaimer Note -->
      <div class="cs-disclaimer-box">
        <span class="mono" style="font-size:11px; color:var(--cyan); font-weight:600;">TAX ACCURACY &amp; COMPLIANCE NOTE</span>
        <p style="font-size:13px; color:var(--paper-dim); margin-top:4px;">"${p.case.disclaimer}"</p>
      </div>

      <!-- Live Project CTA Card -->
      <div class="cs-live-cta-box">
        <h3>TRY THE LIVE PROJECT</h3>
        <p>Explore the ${p.name} application and see the workflow in action.</p>
        <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top:16px;">
          Open ${p.name} ↗
        </a>
      </div>

      <div class="modal-links" style="margin-top:24px;">
        <a href="#contact" class="btn btn-outline" onclick="closeModal();">Start a Similar Project</a>
        <button class="btn btn-outline" onclick="closeModal();">Back to Projects</button>
      </div>
    `;
  } else {
    // Standard modal rendering for other projects
    modalContent.innerHTML = `
      <button class="modal-close" id="modalCloseBtn" aria-label="Close">✕</button>
      <span class="ind">${p.industry} · ${p.status}</span>
      <h3>${p.name}</h3>
      <div class="tag-row" style="margin-top:10px;">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="modal-section"><h4>Problem</h4><p>${p.case.problem}</p></div>
      <div class="modal-section"><h4>Client Requirement</h4><p>${p.case.requirement}</p></div>
      <div class="modal-section"><h4>Our Solution</h4><p>${p.case.solution}</p></div>
      <div class="modal-section"><h4>Design Approach</h4><p>${p.case.design}</p></div>
      <div class="modal-section"><h4>Development Process</h4><p>${p.case.process}</p></div>
      <div class="modal-section"><h4>Key Features</h4><ul class="svc-features">${p.case.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
      <div class="modal-section"><h4>Challenges</h4><p>${p.case.challenges}</p></div>
      <div class="modal-section"><h4>Results</h4><p>${p.case.results}</p></div>
      <div class="modal-links">
        <a href="#contact" class="btn btn-primary" onclick="closeModal();">Start a Similar Project</a>
        ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View Live Site ↗</a>` : ''}
      </div>
    `;
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  trapFocus(modalContent);
}

function closeModal(){
  releaseFocusTrap(modalContent);
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalOverlay.addEventListener('click', (e)=>{ if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

// Interactive Icon Cloud
const ICON_CLOUD_SLUGS = [
  { slug: 'typescript', name: 'TypeScript', color: '3178C6' },
  { slug: 'javascript', name: 'JavaScript', color: 'F7DF1E' },
  { slug: 'react', name: 'React', color: '61DAFB' },
  { slug: 'nextdotjs', name: 'Next.js', color: 'FFFFFF' },
  { slug: 'html5', name: 'HTML5', color: 'E34F26' },
  { slug: 'css3', name: 'CSS3', color: '1572B6' },
  { slug: 'tailwindcss', name: 'Tailwind CSS', color: '06B6D4' },
  { slug: 'nodedotjs', name: 'Node.js', color: '5FA04E' },
  { slug: 'express', name: 'Express', color: 'FFFFFF' },
  { slug: 'postgresql', name: 'PostgreSQL', color: '4169E1' },
  { slug: 'mongodb', name: 'MongoDB', color: '47A248' },
  { slug: 'firebase', name: 'Firebase', color: 'DD2C00' },
  { slug: 'docker', name: 'Docker', color: '2496ED' },
  { slug: 'git', name: 'Git', color: 'F05032' },
  { slug: 'github', name: 'GitHub', color: 'FFFFFF' },
  { slug: 'figma', name: 'Figma', color: 'F24E1E' },
  { slug: 'vercel', name: 'Vercel', color: 'FFFFFF' },
  { slug: 'amazonaws', name: 'AWS', color: 'FF9900' },
  { slug: 'python', name: 'Python', color: '3776AB' },
  { slug: 'openai', name: 'OpenAI', color: '412991' },
];

(function initIconCloud() {
  const container = document.getElementById('iconCloudWrap');
  if (!container) return;

  const slugs = ICON_CLOUD_SLUGS;
  const n = slugs.length;
  const items = [];

  // Rotation state
  let velX = -0.003;   // auto-rotate speed X
  let velY = 0.005;    // auto-rotate speed Y
  const autoVelX = -0.003;
  const autoVelY = 0.005;
  const decay = 0.95;
  let isDragging = false;
  let lastPointer = null;
  let animId = null;

  // Responsive radius with robust fallback minimums
  function getRadius() {
    const w = container.offsetWidth || container.parentElement?.offsetWidth || 420;
    if (w < 280) return Math.max(w * 0.42, 110);
    if (w < 360) return Math.max(w * 0.40, 130);
    if (w < 460) return Math.max(w * 0.38, 150);
    return Math.max(w * 0.36, 175);
  }

  // Helper for generating inline fallback badge icon if CDN image fails
  function createFallbackBadge(name, color) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '42');
    svg.setAttribute('height', '42');
    svg.setAttribute('viewBox', '0 0 42 42');
    
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '42');
    rect.setAttribute('height', '42');
    rect.setAttribute('rx', '8');
    rect.setAttribute('fill', '#' + color);
    rect.setAttribute('opacity', '0.2');
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '50%');
    text.setAttribute('y', '58%');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#' + (color === 'FFFFFF' ? 'FFFFFF' : color));
    text.setAttribute('font-size', '13');
    text.setAttribute('font-weight', '700');
    text.setAttribute('font-family', 'Space Grotesk, sans-serif');
    text.textContent = name.substring(0, 3).toUpperCase();
    
    svg.appendChild(rect);
    svg.appendChild(text);
    return svg;
  }

  // Distribute icons on a Fibonacci sphere (golden angle)
  for (let i = 0; i < n; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / n);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    const iconEl = document.createElement('a');
    iconEl.className = 'cloud-icon';
    iconEl.title = slugs[i].name;
    iconEl.setAttribute('aria-label', slugs[i].name);
    iconEl.href = '#';
    iconEl.addEventListener('click', function(e) { e.preventDefault(); });

    const img = document.createElement('img');
    img.src = 'https://cdn.simpleicons.org/' + slugs[i].slug + '/' + slugs[i].color;
    img.alt = slugs[i].name;
    img.width = 42;
    img.height = 42;
    img.loading = 'lazy';
    img.onerror = function() {
      // Replace broken CDN image with custom SVG badge fallback instead of hiding
      if (img.parentNode) {
        const badge = createFallbackBadge(slugs[i].name, slugs[i].color);
        img.parentNode.replaceChild(badge, img);
      }
    };

    iconEl.appendChild(img);
    container.appendChild(iconEl);

    items.push({
      el: iconEl,
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    });
  }

  // Pointer events for drag interaction
  container.addEventListener('pointerdown', function(e) {
    isDragging = true;
    lastPointer = { x: e.clientX, y: e.clientY };
    container.setPointerCapture(e.pointerId);
  });

  container.addEventListener('pointermove', function(e) {
    if (!isDragging || !lastPointer) return;
    velY = (e.clientX - lastPointer.x) * 0.002;
    velX = (e.clientY - lastPointer.y) * 0.002;
    lastPointer = { x: e.clientX, y: e.clientY };
  });

  container.addEventListener('pointerup', function(e) {
    isDragging = false;
    lastPointer = null;
    try { container.releasePointerCapture(e.pointerId); } catch (_) {}
  });

  container.addEventListener('pointercancel', function() {
    isDragging = false;
    lastPointer = null;
  });

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animation loop
  function animate() {
    if (prefersReduced) {
      // Render once without animation
      renderFrame(getRadius());
      return;
    }

    // Decay drag velocity back to auto-rotation
    if (!isDragging) {
      velX += (autoVelX - velX) * 0.02;
      velY += (autoVelY - velY) * 0.02;
    }

    renderFrame(getRadius());
    animId = requestAnimationFrame(animate);
  }

  function renderFrame(r) {
    var cosX = Math.cos(velX), sinX = Math.sin(velX);
    var cosY = Math.cos(velY), sinY = Math.sin(velY);
    var perspective = 500;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      // Rotate around X axis
      var y1 = item.y * cosX - item.z * sinX;
      var z1 = item.y * sinX + item.z * cosX;
      // Rotate around Y axis
      var x1 = item.x * cosY - z1 * sinY;
      var z2 = item.x * sinY + z1 * cosY;

      item.x = x1;
      item.y = y1;
      item.z = z2;

      // Project 3D → 2D with perspective
      var scale = perspective / (perspective + item.z * r);
      var px = item.x * r * scale;
      var py = item.y * r * scale;
      var depth = (item.z + 1) / 2; // 0 = far, 1 = near

      item.el.style.transform = 'translate(-50%,-50%) translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px) scale(' + (0.5 + 0.5 * depth).toFixed(3) + ')';
      item.el.style.opacity = (0.2 + 0.8 * depth).toFixed(3);
      item.el.style.zIndex = Math.floor(depth * 100);
    }
  }

  // Pause animation when section is not visible
  var cloudObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (!animId && !prefersReduced) animId = requestAnimationFrame(animate);
      } else {
        if (animId) { cancelAnimationFrame(animId); animId = null; }
      }
    });
  }, { threshold: 0 });
  cloudObserver.observe(container);

  // Initial render
  if (prefersReduced) {
    renderFrame(getRadius());
  } else {
    animId = requestAnimationFrame(animate);
  }
})();

// Customer experience
const cxGrid = document.getElementById('cxGrid');
CX.forEach(c=>{
  const card = el('div','blueprint-card cx-card reveal');
  card.innerHTML = `<h3><span class="num">${c.n}</span>${c.t}</h3><p>${c.d}</p>`;
  cxGrid.appendChild(card);
});


// Why us
const whyGrid = document.getElementById('whyGrid');
WHY.forEach((w,i)=>{
  const item = el('div','why-item reveal');
  item.innerHTML = `<span class="idx">${String(i+1).padStart(2,'0')}</span><p>${w}</p>`;
  whyGrid.appendChild(item);
});

// Journey
const journeyRow = document.getElementById('journeyRow');
JOURNEY.forEach((j,i)=>{
  journeyRow.appendChild(el('span','journey-step', j));
  if(i < JOURNEY.length-1) journeyRow.appendChild(el('span','journey-arrow', '→'));
});


// FAQ
const faqList = document.getElementById('faqList');
FAQS.forEach(f=>{
  const item = el('div','faq-item reveal');
  item.innerHTML = `
    <button class="faq-q"><span>${f.q}</span><span class="plus mono">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  `;
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  btn.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(fi=>{
      fi.classList.remove('open');
      fi.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
  faqList.appendChild(item);
});

/* ===================== INTERACTIONS ===================== */

// Mobile menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
hamburgerBtn.addEventListener('click', ()=>{
  const open = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> mobileMenu.classList.remove('open')));

// WhatsApp float
const waMessage = encodeURIComponent("Hi, I'm interested in building a website/web application. I would like to discuss my project.");
document.getElementById('waFloat').href = `https://wa.me/919042071689?text=${waMessage}`;

// Animated counters
const counters = document.querySelectorAll('.stat .num');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const target = entry.target;
      if (!target.dataset.count || isNaN(parseInt(target.dataset.count, 10))) {
        counterObserver.unobserve(target);
        return;
      }
      const end = parseInt(target.dataset.count, 10);
      const suffix = target.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now-start)/duration, 1);
        target.textContent = Math.floor(progress * end) + suffix;
        if(progress < 1) requestAnimationFrame(tick);
        else target.textContent = end + suffix;
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(target);
    }
  });
}, {threshold:0.4});
counters.forEach(c=> counterObserver.observe(c));

// Scroll reveal
function observeReveals() {
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold: 0.01, rootMargin: '100px 0px 0px 0px'});
  document.querySelectorAll('.reveal').forEach(r=> revealObserver.observe(r));
}
observeReveals();

// File upload label
const fileInput = document.getElementById('f-file');
const fileLabel = document.getElementById('fileLabel');
fileInput.addEventListener('change', ()=>{
  fileLabel.textContent = fileInput.files.length ? fileInput.files[0].name : 'Click to attach a brief, spec, or design reference';
});

// Contact form validation
// Contact form validation & submission
const form = document.getElementById('contactForm');
const successBox = document.getElementById('successBox');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let valid = true;
    const required = [
      {name:'name', check: v => v && v.trim().length > 0},
      {name:'email', check: v => v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())},
      {name:'type', check: v => v && v.trim().length > 0},
      {name:'description', check: v => v && v.trim().length > 0},
    ];
    required.forEach(r => {
      const fieldWrap = form.querySelector(`[data-field="${r.name}"]`);
      const input = form.querySelector(`[name="${r.name}"]`);
      if(!input || !r.check(input.value)){
        if (fieldWrap) fieldWrap.classList.add('invalid');
        valid = false;
      } else {
        if (fieldWrap) fieldWrap.classList.remove('invalid');
      }
    });
    if(!valid) return;

    // Clear previous error messages if any
    let errElem = document.getElementById('formErrorMsg');
    if (errElem) errElem.remove();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.classList.add('btn-loading');
      submitBtn.disabled = true;
    }

    const payload = {
      name: form.querySelector('[name="name"]')?.value || '',
      company: form.querySelector('[name="company"]')?.value || '',
      email: form.querySelector('[name="email"]')?.value || '',
      phone: form.querySelector('[name="phone"]')?.value || '',
      projectType: form.querySelector('[name="type"]')?.value || '',
      expectedTimeline: form.querySelector('[name="timeline"]')?.value || '',
      referenceWebsite: form.querySelector('[name="reference"]')?.value || '',
      projectDescription: form.querySelector('[name="description"]')?.value || '',
      requiredFeatures: form.querySelector('[name="features"]')?.value || ''
    };

    try {
      const apiBase = (typeof window !== 'undefined' && window.API_BASE_URL) ? window.API_BASE_URL : '';
      const response = await fetch(`${apiBase}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        form.style.display = 'none';
        if (successBox) successBox.classList.add('show');
      } else {
        throw new Error(result.message || 'Something went wrong while submitting your inquiry. Please try again.');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
      }

      errElem = document.createElement('div');
      errElem.id = 'formErrorMsg';
      errElem.className = 'err-box-msg';
      errElem.style.cssText = 'color:var(--accent); font-size:13.5px; margin-top:14px; text-align:center; padding:10px; border:1px solid rgba(255,107,53,0.3); border-radius:6px; background:rgba(255,107,53,0.08);';
      errElem.textContent = err.message || 'Something went wrong while submitting your inquiry. Please try again.';
      form.appendChild(errElem);
    }
  });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}, { passive: true });
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer WhatsApp link assignment
const footerWaBtn = document.getElementById('footerWaBtn');
if (footerWaBtn) {
  footerWaBtn.href = `https://wa.me/919042071689?text=${waMessage}`;
  footerWaBtn.target = '_blank';
  footerWaBtn.rel = 'noopener';
}

// Footer Back to Top button
const footerScrollTopBtn = document.getElementById('footerScrollTopBtn');
if (footerScrollTopBtn) {
  footerScrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Magnetic Buttons Interaction (Desktop only, disabled on touch/reduced motion)
(function initMagneticButtons() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isTouch || isReduced) return;

  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Subtle 25% pull + slight scale
      const moveX = x * 0.25;
      const moveY = y * 0.25;

      btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.04)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });
})();

// Parallax Giant BG Text ("BUILD")
(function initFooterParallax() {
  const giantText = document.getElementById('footerGiantText');
  const footer = document.getElementById('footer');
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!giantText || !footer || isReduced) return;

  window.addEventListener('scroll', () => {
    const rect = footer.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Check if footer is in view
    if (rect.top < windowH && rect.bottom > 0) {
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const translateY = (progress - 0.5) * -60; // Smooth subtle vertical parallax offset
      giantText.style.transform = `translate(-50%, ${translateY.toFixed(1)}px)`;
    }
  }, { passive: true });
})();

