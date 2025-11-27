# Sophos IMR Advisory Services Questionnaire

A modern, interactive web-based questionnaire for Sophos Incident Management and Response (IMR) Advisory Services. Built to help prospects identify their security needs and receive tailored recommendations from the IMR service catalog.

![Sophos](https://www.sophos.com/sites/default/files/2022-02/sophos-logo.svg)

---

## ✨ Features

### 🎨 Sophos Branding
- **Sophos Blue** `#2006F7` — Official brand color throughout
- **Montserrat Typography** — Official Sophos web font
- **Sophos Logo** — SVG logo in header
- **Sophos Favicon** — Official favicon from sophos.com

### 📋 Interactive Questionnaire
- **7 Service Categories** with 40+ individual services
- **Collapsible Sections** — Click headers to expand/collapse
- **"Interested" Checkboxes** — Mark services with animated checkmarks
- **Scoping Questions** — Detailed questions for each service

### 🤖 Explain with AI
- **Perplexity AI Integration** — Every service has an "Explain with AI" button
- **Documentation-Based** — Uses official [Secureworks IMR Catalog](https://docs.taegis.secureworks.com/services/incident-response/imr-services-catalog/imr-services-catalog-overview/)
- **No Login Required** — Opens Perplexity with pre-filled prompt
- **Structured Responses** — Explains what, why, and requirements for each service

### 📊 Progress Tracking
- **Services Selected Counter** — Real-time count with pulse animation
- **Sections Progress** — Shows how many sections have selections (e.g., 3/7)
- **Sticky Progress Bar** — Always visible below header
- **Expand All / Collapse All** — Quick controls for all sections

### 💾 Auto-Save
- **Automatic Saving** — Form data saved to browser localStorage
- **Restore on Refresh** — All selections and answers restored
- **Status Indicator** — Shows "Saving...", "Saved", "Restored"
- **Privacy-Friendly** — Data stays in browser only, never sent to servers
- **Clear Option** — "Clear Form" button removes all saved data

### 📄 PDF Export
- **Download PDF Button** — Generate clean PDF summary
- **Filtered Output** — Only includes services marked as "Interested"
- **Contact Information** — Customer details at the top
- **Answered Questions Only** — Shows scoping answers provided
- **Sophos Branding** — Logo and colors in PDF

### 🎬 Smooth Animations
- **Staggered Fade-In** — Sections animate on page load
- **Pulse Animation** — Counter pulses when updated
- **Checkbox Animation** — Animated checkmark on selection
- **Smooth Transitions** — All interactive elements

---

## 📁 File Structure

```
svcs/
├── questionnaire.html    # Main HTML structure
├── styles.css            # Sophos-branded CSS styles
├── script.js             # JavaScript functionality
├── sophos-logo.svg       # Sophos logo asset
└── README.md             # This documentation
```

---

## 🚀 Quick Start

### Running Locally

1. Clone or download this repository
2. Open `questionnaire.html` in any modern web browser
3. No server, build process, or dependencies required

```bash
# macOS
open questionnaire.html

# Linux
xdg-open questionnaire.html

# Windows
start questionnaire.html
```

### Using the Questionnaire

1. **Browse Services** — Expand sections to view available services
2. **Learn More** — Click "Explain with AI" for detailed explanations via Perplexity
3. **Mark Interest** — Check "Interested" for relevant services
4. **Answer Questions** — Fill in scoping questions for selected services
5. **Add Contact Info** — Complete the contact information section
6. **Download PDF** — Click "Download PDF" to generate a summary

---

## 📚 Service Categories

| # | Category | Services |
|---|----------|----------|
| 1 | **Incident Readiness Services** | IR Plan Development, Review, Playbook Development |
| 2 | **Testing and Validation Services** | Application Security, Penetration Testing, Security Awareness, Assessments |
| 3 | **Threat Intelligence Services** | EBS Info Brief, Threat Landscape, TI Support |
| 4 | **Workshops and Exercises** | Adversary Exercises, Tabletop Exercises, IR Training |
| 5 | **Professional Services** | Taegis Health Check, Enablement, Training |
| 6 | **Programs** | Ransomware Preparedness Program |
| 7 | **Technical Assistance Services** | Fixed-scope technical assistance |

---

## 🔧 Technical Details

### Technologies
- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** — Vanilla JS, no frameworks
- **Google Fonts** — Montserrat
- **Perplexity AI** — External AI explanations (no API key needed)
- **Browser Print API** — Native PDF generation

### Browser Support
- ✅ Google Chrome (recommended)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

### Data Storage
- Form data stored in `localStorage`
- Keys: `questionnaire_data`, `questionnaire_saved_at`
- Theme preference: `theme`
- No cookies, no external servers

---

## 🎨 Customization

### Colors (styles.css)
```css
:root {
    --sophos-blue: #2006F7;       /* Primary brand color */
    --sophos-blue-dark: #1A05C9;  /* Hover states */
    --sophos-blue-light: #4D35F9; /* Accents */
    --sophos-bg: #EEEAFF;         /* Light backgrounds */
}
```

### Adding New Services

1. Add HTML in `questionnaire.html`:
```html
<div class="service-block">
    <div class="service-header">
        <h3 class="service-title">New Service Name</h3>
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

2. Add documentation slug in `script.js`:
```javascript
const serviceDocSlugs = {
    // ... existing services
    'New Service Name': 'new-service-slug',
};
```

---

## 🔗 Related Resources

- [Sophos Advisory Services](https://www.sophos.com/en-us/products/managed-detection-and-response/incident-response)
- [IMR Services Catalog Overview](https://docs.taegis.secureworks.com/services/incident-response/imr-services-catalog/imr-services-catalog-overview/)
- [Sophos Brand Guidelines](https://brand.sophos.com)
- [Sophos Blue Color](https://brand.sophos.com/identity#colors) — `#2006F7`
- [Sophos Typography](https://brand.sophos.com/identity#typography) — Montserrat

---

## 📋 Changelog

### v2.0 (Current)
- ✅ Added "Explain with AI" buttons (Perplexity integration)
- ✅ Added progress tracking bar with counters
- ✅ Added Expand All / Collapse All controls
- ✅ Added auto-save to browser localStorage
- ✅ Added smooth animations and transitions
- ✅ Updated to Sophos Blue `#2006F7`
- ✅ Updated to Montserrat typography

### v1.0
- Initial questionnaire with all 7 sections
- PDF export functionality
- Collapsible sections
- Sophos branding

---

## ⚖️ License & Copyright

### Sophos Trademark Notice

**Sophos** and the **Sophos logo** are registered trademarks of Sophos Ltd. All rights reserved.

This questionnaire tool is intended for internal use by Sophos and its authorized partners for collecting customer requirements for IMR Advisory Services.

### Usage Rights

- Sophos brand assets (logo, colors, typography) used per [Sophos Brand Guidelines](https://brand.sophos.com)
- For authorized business use only
- Redistribution requires written approval from Sophos Ltd.

### Third-Party Attributions

| Resource | License |
|----------|---------|
| [Montserrat Font](https://fonts.google.com/specimen/Montserrat) | [SIL Open Font License](https://scripts.sil.org/OFL) |
| [Heroicons](https://heroicons.com/) | [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE) |
| [Perplexity AI](https://www.perplexity.ai/) | External service |

---

## 📞 Support

For questions or issues related to this questionnaire tool, please contact your Sophos representative or the IMR Advisory Services team.

**Email:** secureworks_services@secureworks.com

---

<p align="center">
  <strong>© 2025 Sophos Ltd. All rights reserved.</strong><br>
  <em>Sophos and Sophos Logo are registered trademarks of Sophos Limited.</em>
</p>
