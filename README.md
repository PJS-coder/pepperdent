# PepperDent Dental Website - HTML/CSS/JS Version

This is a pure HTML, CSS, and JavaScript version of the PepperDent Dental website, converted from the Next.js React version.

## 📁 Project Structure

```
html-css-js/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling (mobile-first responsive)
├── script.js           # JavaScript for interactivity
├── images/             # All optimized image assets (.webp / .png)
│   ├── pepperdent-logo.webp
│   ├── girl.webp
│   ├── favicon.png
│   ├── teeth-comparison.webp
│   ├── teeth-comparison-before.webp
│   ├── dr-aanchal-gupta.webp
│   ├── digital-dentistry-tech.webp
│   └── [service-name].webp (and other content images)
└── README.md           # This file
```

## 🎨 Features

### Sections Included:
1. **Navigation** - Sticky header with mobile menu
2. **Hero Section** - Eye-catching landing with CTA buttons
3. **Before/After Comparison** - Interactive slider to compare teeth whitening results
4. **Stats Section** - Key metrics display
5. **Why Choose Us** - Feature cards highlighting advantages
6. **Services** - Grid of dental services offered
7. **About Section** - Information about the clinic and team
8. **Statistics Dark** - Additional metrics in dark theme
9. **Testimonials** - Patient reviews carousel
10. **Treatments** - Comprehensive treatment options
11. **CTA Section** - Call-to-action banner
12. **Contact & Location** - Contact details with embedded map
13. **Footer** - Links and contact information

### Interactive Features:
- ✅ Mobile-responsive navigation menu
- ✅ Before/After image comparison slider (drag to compare)
- ✅ Smooth scroll navigation
- ✅ Active navigation highlighting on scroll
- ✅ Hover effects on cards and buttons
- ✅ Touch-friendly mobile interactions

## 🚀 How to Use

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results

2. **Using a local server (recommended):**
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   # Then open: http://localhost:8000
   
   # Or use VS Code Live Server extension
   # Or use npm's http-server:
   npx http-server
   ```

## 📸 Image Paths

All images are now in the `images/` folder within html-css-js:
- Logo: `images/pepperdent-logo.webp`
- Hero image: `images/girl.webp`
- Team/Dentist: `images/dr-aanchal-gupta.webp`
- Patient photos: `images/patient-1.webp`, `patient-2.webp`, `patient-3.webp`
- Teeth comparison: `images/teeth-comparison.webp`, `teeth-comparison-before.webp`

**The project is now completely self-contained and portable!**

## 🎨 Styling

- **Mobile-first approach** - Designed for mobile, enhanced for desktop
- **CSS Variables** - Easy color customization in `:root`
- **Responsive breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1023px
  - Desktop: ≥ 1024px

## 🔧 Customization

### Change Colors:
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: rgb(77, 124, 154);
    --color-primary-glow: rgb(96, 147, 178);
    /* ... more colors */
}
```

### Modify Content:
All content is in `index.html` - simply edit the text, headings, or sections as needed.

### Add/Remove Sections:
Sections are clearly marked with comments in `index.html`. You can easily add, remove, or reorder them.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

Update the contact details in the Contact section and Footer:
- Phone: +91 81301 90266
- Email: info@pepperdent.in
- Address: 23, Bunglow Road, Kamla Nagar, Delhi 110007

## 📝 Notes

- The website is fully static - no backend required
- All images should be optimized for web before deployment
- Consider adding lazy loading for images in production
- The Google Maps embed is already included in the Contact section

## 🎯 Performance Tips

1. Optimize images (compress JPG/PNG files)
2. Minify CSS and JS for production
3. Enable browser caching
4. Consider using a CDN for assets

---

**Created:** 2026  
**Version:** 1.0.0  
**License:** All rights reserved - PepperDent Dental
