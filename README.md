# Secureworks IMR Advisory Services Questionnaire

A dynamic, interactive web-based questionnaire for Sophos Incident Management and Response (IMR) Advisory Services. This tool helps prospects identify their security needs and receive tailored recommendations from the IMR service catalog.

---

## Features

- **Interactive Questionnaire** — 7 service categories with 40+ individual services
- **Collapsible Sections** — Clean, organized interface with expandable/collapsible sections
- **Interest Tracking** — Mark services as "Interested" with visual highlighting
- **Scoping Questions** — Detailed questions to help tailor proposals
- **PDF Export** — Download a clean PDF with only selected services and contact information
- **No Data Storage** — All data stays in the browser; nothing is sent to any server
- **Sophos Branding** — Official Sophos Blue (#2006F7), Montserrat typography, and brand assets
- **Responsive Design** — Works on desktop, tablet, and mobile devices

---

## Service Categories

1. **Incident Readiness Services** — IR Plan Development, Review, and Playbook Development
2. **Testing and Validation Services** — Application Security, Penetration Testing, Security Awareness, Assessments
3. **Threat Intelligence Services** — EBS Info Brief, Threat Landscape, TI Support
4. **Workshops and Exercises** — Adversary Exercises, Tabletop Exercises, IR Training
5. **Professional Services** — Taegis Health Check, Enablement, Training (for existing customers)
6. **Programs** — Ransomware Preparedness Program
7. **Technical Assistance Services** — Fixed-scope technical assistance

---

## File Structure

```
svcs/
├── questionnaire.html    # Main HTML file
├── styles.css            # Sophos-branded CSS styles
├── script.js             # JavaScript for interactivity and PDF export
├── sophos-logo.svg       # Sophos logo asset
└── README.md             # This file
```

---

## Usage

### Running Locally

1. Clone or download this repository
2. Open `questionnaire.html` in any modern web browser
3. No server or build process required — it's a static site

```bash
# Example: Open in default browser (macOS)
open questionnaire.html

# Example: Open in default browser (Linux)
xdg-open questionnaire.html

# Example: Open in default browser (Windows)
start questionnaire.html
```

### Using the Questionnaire

1. **Review Services** — Expand each section to view available services
2. **Mark Interest** — Check "Interested" for services the customer wants
3. **Answer Questions** — Fill in scoping questions for selected services
4. **Add Contact Info** — Complete the contact information section
5. **Download PDF** — Click "Download PDF" to generate a summary document

### PDF Output

The exported PDF includes only:
- Contact information
- Services marked as "Interested"
- Answered scoping questions
- Generation date and Sophos branding

---

## Technologies

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** — Vanilla JS, no frameworks required
- **Google Fonts** — Montserrat (Sophos typography)
- **Browser Print API** — Native PDF generation via print dialog

---

## Browser Support

- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --sophos-blue: #2006F7;      /* Primary brand color */
    --sophos-blue-dark: #1A05C9; /* Hover states */
    --sophos-blue-light: #4D35F9;
    --sophos-bg: #EEEAFF;        /* Light background */
}
```

### Adding Services
Add new service blocks in `questionnaire.html` following the existing pattern:
```html
<div class="service-block">
    <div class="service-header">
        <h3 class="service-title">Service Name</h3>
        <label class="interested-checkbox">
            <input type="checkbox" name="unique_name_interested">
            <span>Interested</span>
        </label>
    </div>
    <p class="service-description">Service description...</p>
    <div class="scoping-questions">
        <!-- Add questions here -->
    </div>
</div>
```

---

## Related Resources

- [Sophos Advisory Services](https://www.sophos.com/en-us/products/managed-detection-and-response/incident-response)
- [IMR Services Catalog Overview](https://docs.taegis.secureworks.com/services/incident-response/imr-services-catalog/imr-services-catalog-overview/)
- [Sophos Brand Guidelines](https://brand.sophos.com)

---

## License & Copyright

### Sophos Trademark Notice

**Sophos** and the **Sophos logo** are registered trademarks of Sophos Ltd. All rights reserved.

This questionnaire tool is intended for internal use by Sophos and its authorized partners for the purpose of collecting customer requirements for IMR Advisory Services.

### Usage Rights

- The Sophos brand assets (logo, colors, typography) are used in accordance with [Sophos Brand Guidelines](https://brand.sophos.com)
- This tool is provided for authorized business use only
- Redistribution or modification for external use requires written approval from Sophos Ltd.

### Third-Party Resources

- **Montserrat Font** — Licensed under the [SIL Open Font License](https://scripts.sil.org/OFL)
- **Heroicons** — SVG icons licensed under [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)

---

## Support

For questions or issues related to this questionnaire tool, please contact your Sophos representative or the IMR Advisory Services team.

---

© 2024 Sophos Ltd. All rights reserved.

*Sophos and Sophos Logo are registered trademarks of Sophos Limited. All other product and company names mentioned are trademarks or registered trademarks of their respective owners.*

