const fs = require('fs');

async function testUploads() {
  try {
    // Test 1: JSON submission (No file)
    console.log('--- Test 1: No file (JSON) ---');
    const res1 = await fetch('http://localhost:8080/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'User 1',
        email: 'user1@example.com',
        projectType: 'Web Apps',
        projectDescription: 'No file test.'
      })
    });
    console.log('Test 1 Result:', res1.status, await res1.json());

    // Test 2: Multipart submission with PDF (resume.pdf)
    console.log('--- Test 2: Upload PDF (resume.pdf) ---');
    const formData2 = new FormData();
    formData2.append('name', 'Dinesh Kumar');
    formData2.append('email', 'dinesh@example.com');
    formData2.append('projectType', 'Web Apps');
    formData2.append('projectDescription', 'PDF attachment test.');
    const dummyPdf = new Blob(['%PDF-1.4 Dummy PDF Binary Content'], { type: 'application/pdf' });
    formData2.append('file', dummyPdf, 'resume.pdf');

    const res2 = await fetch('http://localhost:8080/api/inquiries', {
      method: 'POST',
      body: formData2
    });
    console.log('Test 2 Result:', res2.status, await res2.json());

    // Test 3: Multipart submission with DOCX (company-requirements.docx)
    console.log('--- Test 3: Upload DOCX (company-requirements.docx) ---');
    const formData3 = new FormData();
    formData3.append('name', 'John Doe');
    formData3.append('email', 'john@example.com');
    formData3.append('projectType', 'E-Commerce');
    formData3.append('projectDescription', 'DOCX attachment test.');
    const dummyDocx = new Blob(['Dummy DOCX Binary Content'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    formData3.append('file', dummyDocx, 'company-requirements.docx');

    const res3 = await fetch('http://localhost:8080/api/inquiries', {
      method: 'POST',
      body: formData3
    });
    console.log('Test 3 Result:', res3.status, await res3.json());

    // Test 4: Multipart submission with PNG (design.png)
    console.log('--- Test 4: Upload PNG (design.png) ---');
    const formData4 = new FormData();
    formData4.append('name', 'Elena V');
    formData4.append('email', 'elena@example.com');
    formData4.append('projectType', 'Custom Web Solutions');
    formData4.append('projectDescription', 'PNG image attachment test.');
    const dummyPng = new Blob(['\x89PNG\r\n\x1a\nDummy PNG Image Data'], { type: 'image/png' });
    formData4.append('file', dummyPng, 'design.png');

    const res4 = await fetch('http://localhost:8080/api/inquiries', {
      method: 'POST',
      body: formData4
    });
    console.log('Test 4 Result:', res4.status, await res4.json());

  } catch (err) {
    console.error('Test execution error:', err);
  }
}

testUploads();
