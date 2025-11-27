/**
 * Sophos IMR Advisory Services Questionnaire
 * JavaScript - Using browser print for PDF generation
 */

document.addEventListener('DOMContentLoaded', function() {
    initializeInterestedCheckboxes();
    initializeCollapsibleSections();
});

function initializeCollapsibleSections() {
    const sections = document.querySelectorAll('.section');
    
    // Collapse all sections by default
    sections.forEach(section => {
        section.classList.add('collapsed');
    });
    
    // Add click handlers to toggle
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.closest('.section');
            section.classList.toggle('collapsed');
        });
    });
}

function initializeInterestedCheckboxes() {
    const checkboxes = document.querySelectorAll('.interested-checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const serviceBlock = this.closest('.service-block');
            if (serviceBlock) {
                serviceBlock.classList.toggle('interested', this.checked);
            }
        });
    });
}

function downloadPDF() {
    const interestedServices = document.querySelectorAll('.service-block.interested');
    if (interestedServices.length === 0) {
        alert('Please mark at least one service as "Interested" before downloading the PDF.');
        return;
    }

    // Get contact info
    const name = document.querySelector('[name="contact_name"]')?.value?.trim() || '';
    const company = document.querySelector('[name="contact_company"]')?.value?.trim() || '';
    const email = document.querySelector('[name="contact_email"]')?.value?.trim() || '';
    const phone = document.querySelector('[name="contact_phone"]')?.value?.trim() || '';
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Build print content
    let servicesHTML = '';
    let currentSection = '';

    interestedServices.forEach(service => {
        const section = service.closest('.section');
        const sectionTitle = section?.querySelector('.section-title')?.textContent?.trim() || '';
        const serviceTitle = service.querySelector('.service-title')?.textContent?.trim() || 'Service';

        if (sectionTitle && sectionTitle !== currentSection) {
            currentSection = sectionTitle;
            servicesHTML += `<div class="pdf-section-header">${escapeHtml(sectionTitle)}</div>`;
        }

        const answers = [];
        service.querySelectorAll('.form-group').forEach(group => {
            const question = group.querySelector('.question')?.textContent?.trim();
            if (!question) return;

            const textInput = group.querySelector('input[type="text"], input[type="email"], input[type="tel"], textarea');
            if (textInput && textInput.value?.trim()) {
                answers.push({ q: question, a: textInput.value.trim() });
                return;
            }

            const checkedRadio = group.querySelector('input[type="radio"]:checked');
            if (checkedRadio) {
                const label = checkedRadio.closest('.radio-item')?.querySelector('span')?.textContent?.trim() || checkedRadio.value;
                answers.push({ q: question, a: label });
            }
        });

        let answersHTML = '';
        if (answers.length > 0) {
            answers.forEach(a => {
                answersHTML += `
                    <div class="pdf-answer">
                        <div class="pdf-question">${escapeHtml(a.q)}</div>
                        <div class="pdf-response">${escapeHtml(a.a)}</div>
                    </div>`;
            });
        } else {
            answersHTML = '<div class="pdf-no-details">No details provided</div>';
        }

        servicesHTML += `
            <div class="pdf-service">
                <div class="pdf-service-title">✓ ${escapeHtml(serviceTitle)}</div>
                ${answersHTML}
            </div>`;
    });

    // Create print window
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Sophos IMR Advisory Services Questionnaire</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            font-size: 12px;
            line-height: 1.6;
            color: #333;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
        }
        .pdf-header {
            text-align: center;
            border-bottom: 4px solid #2006F7;
            padding-bottom: 20px;
            margin-bottom: 25px;
        }
        .pdf-logo {
            margin-bottom: 10px;
        }
        .pdf-logo svg {
            height: 28px;
            width: auto;
        }
        .pdf-subtitle {
            font-size: 16px;
            color: #444;
        }
        .pdf-contact {
            background: #EEEAFF;
            border-left: 4px solid #2006F7;
            padding: 15px 20px;
            margin-bottom: 25px;
        }
        .pdf-contact-title {
            font-weight: bold;
            color: #2006F7;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 10px;
        }
        .pdf-contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            font-size: 13px;
        }
        .pdf-contact-grid b { color: #2006F7; }
        .pdf-services-header {
            font-size: 14px;
            font-weight: bold;
            color: #2006F7;
            margin-bottom: 15px;
        }
        .pdf-section-header {
            background: #2006F7;
            color: white;
            padding: 10px 15px;
            font-weight: bold;
            font-size: 13px;
            margin-top: 15px;
        }
        .pdf-service {
            border: 1px solid #ddd;
            border-top: none;
            padding: 12px 15px;
            background: #fafbfc;
        }
        .pdf-service-title {
            font-weight: bold;
            color: #1A05C9;
            font-size: 13px;
            margin-bottom: 8px;
        }
        .pdf-answer {
            margin-left: 15px;
            margin-bottom: 8px;
        }
        .pdf-question {
            font-size: 11px;
            color: #666;
        }
        .pdf-response {
            font-size: 12px;
            color: #222;
            padding-left: 10px;
            border-left: 2px solid #2006F7;
            margin-top: 2px;
        }
        .pdf-no-details {
            margin-left: 15px;
            font-size: 11px;
            color: #999;
            font-style: italic;
        }
        .pdf-footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
            text-align: center;
            font-size: 10px;
            color: #888;
        }
        @media print {
            body { padding: 20px; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <div class="pdf-header">
        <div class="pdf-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 600 65">
                <path fill="#2006f7" d="M4.48,4.35v28.3c0,4.8,2.6,9.21,6.79,11.54l29.46,16.35.19.11,29.6-16.45c4.19-2.33,6.79-6.74,6.79-11.53V4.35H4.48ZM51.89,37.88c-2.2,1.22-4.67,1.86-7.18,1.86l-27.32-.08,15.32-8.54c1.48-.83,3.14-1.26,4.84-1.27l28.92-.09-14.57,8.13ZM51.47,23.9c-1.48.83-3.14,1.26-4.84,1.27l-28.92.09,14.57-8.13c2.2-1.22,4.67-1.86,7.18-1.86l27.32.08-15.32,8.54Z"/>
                <path fill="#001a47" d="M578.8,25h-46.42c-2.12,0-3.84-1.72-3.84-3.84,0-2.12,1.72-3.84,3.84-3.84h60.4s0-12.88,0-12.88h-60.4c-9.22,0-16.72,7.5-16.72,16.72,0,9.22,7.5,16.72,16.72,16.72h46.42c2.12,0,3.84,1.75,3.84,3.86,0,2.12-1.72,3.77-3.84,3.77h-60.53v12.88h60.53c9.22,0,16.72-7.42,16.72-16.64,0-9.22-7.5-16.74-16.72-16.74Z"/>
                <path fill="#001a47" d="M228.84,4.47h-25.15c-14.89,0-27.01,12.12-27.01,27.01,0,14.89,12.12,27.01,27.01,27.01h25.15c14.89,0,27.01-12.12,27.01-27.01,0-14.89-12.12-27.01-27.01-27.01ZM228.84,45.6h-25.15c-7.78,0-14.11-6.33-14.11-14.11,0-7.78,6.33-14.11,14.11-14.11h25.15c7.78,0,14.11,6.33,14.11,14.11,0,7.78-6.33,14.11-14.11,14.11Z"/>
                <path fill="#001a47" d="M483.22,4.47h-25.15c-14.89,0-27.01,12.12-27.01,27.01,0,14.89,12.12,27.01,27.01,27.01h25.15c14.89,0,27.01-12.12,27.01-27.01,0-14.89-12.12-27.01-27.01-27.01ZM483.22,45.6h-25.15c-7.78,0-14.11-6.33-14.11-14.11,0-7.78,6.33-14.11,14.11-14.11h25.15c7.78,0,14.11,6.33,14.11,14.11,0,7.78-6.33,14.11-14.11,14.11Z"/>
                <polygon fill="#001a47" points="410.52 4.53 410.52 24.96 360.14 24.96 360.14 4.53 347.24 4.53 347.24 58.42 360.14 58.42 360.14 37.86 410.52 37.86 410.52 58.42 423.42 58.42 423.42 4.53 410.52 4.53"/>
                <path fill="#001a47" d="M155.11,25h-46.42c-2.12,0-3.84-1.72-3.84-3.84,0-2.12,1.72-3.84,3.84-3.84h60.4V4.44h-60.4c-9.22,0-16.72,7.5-16.72,16.72,0,9.22,7.5,16.72,16.72,16.72h46.42c2.12,0,3.84,1.75,3.84,3.86s-1.72,3.77-3.84,3.77h-60.53v12.88s60.53,0,60.53,0c9.22,0,16.72-7.42,16.72-16.64,0-9.22-7.5-16.74-16.72-16.74Z"/>
                <path fill="#001a47" d="M319.66,4.53h-43.49s-5.2,0-5.2,0h-7.7s0,53.89,0,53.89h12.9s0-14.44,0-14.44h43.49c10.88,0,19.73-8.85,19.73-19.73,0-10.88-8.85-19.73-19.73-19.73ZM319.66,31.08h-43.49s0-13.66,0-13.66h43.49c3.77,0,6.83,3.06,6.83,6.83,0,3.77-3.06,6.83-6.83,6.83Z"/>
            </svg>
        </div>
        <div class="pdf-subtitle">IMR Advisory Services Questionnaire</div>
    </div>

    <div class="pdf-contact">
        <div class="pdf-contact-title">Contact Information</div>
        <div class="pdf-contact-grid">
            ${name ? `<div><b>Name:</b> ${escapeHtml(name)}</div>` : ''}
            ${company ? `<div><b>Company:</b> ${escapeHtml(company)}</div>` : ''}
            ${email ? `<div><b>Email:</b> ${escapeHtml(email)}</div>` : ''}
            ${phone ? `<div><b>Phone:</b> ${escapeHtml(phone)}</div>` : ''}
        </div>
    </div>

    <div class="pdf-services-header">SELECTED SERVICES (${interestedServices.length})</div>
    
    ${servicesHTML}

    <div class="pdf-footer">
        Generated on ${date} | © ${new Date().getFullYear()} Sophos Ltd. All rights reserved.
    </div>

    <div class="no-print" style="margin-top: 30px; text-align: center;">
        <button onclick="window.print()" style="background: #2006F7; color: white; border: none; padding: 12px 30px; font-size: 14px; border-radius: 6px; cursor: pointer; font-weight: bold;">
            📄 Save as PDF
        </button>
        <p style="margin-top: 10px; color: #666; font-size: 12px;">Click the button above, then choose "Save as PDF" as the destination</p>
    </div>
</body>
</html>
    `);
    
    printWindow.document.close();
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function clearForm() {
    if (confirm('Clear all responses?')) {
        document.getElementById('questionnaire-form').reset();
        document.querySelectorAll('.service-block.interested').forEach(b => b.classList.remove('interested'));
    }
}
