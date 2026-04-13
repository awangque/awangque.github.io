# Changelog

![stage](https://img.shields.io/badge/Idea%20|%20Prototype-0.0.x-red) ![stage](https://img.shields.io/badge/Working%20(Incomplete)-0.x.0-yellow) ![stage](https://img.shields.io/badge/Stable-x.0.0-green)

---
## Mobile Scrolling Fixes
![stage](https://img.shields.io/badge/Stage-Stable-green) ![version](https://img.shields.io/badge/Version-1.3.0-blue)
### Added
- Mobile-only scroll handling for long content sections
- Explicit touch scrolling support for Android and iOS

### Changed
- About section layout adjusted to prevent content clipping on small screens
- Flexbox alignment modified on mobile to allow vertical growth

### Fixed
- Unscrollable About section on mobile devices
- Content overflow issues caused by absolute positioning

---

## Contact Form Enhancements
![stage](https://img.shields.io/badge/Stage-Stable-green) ![version](https://img.shields.io/badge/Version-1.2.0-blue)
### Added
- AJAX-based form submission (Fetch API)
- SweetAlert2 feedback for submission success/failure
- Honeypot field for basic bot protection
- reCAPTCHA v3 token generation (client-side)

### Changed
- Removed default Google Forms redirect behavior
- Improved user feedback during form submission

### Known Limitations
- reCAPTCHA score not server-verified (static hosting constraint)

---

## Responsive Layout Improvements
![stage](https://img.shields.io/badge/Stage-Stable-green) ![version](https://img.shields.io/badge/Version-1.1.0-blue)
### Changed
- Mobile layout refinements using media queries
- Font scaling for small screens
- Adjusted spacing for navigation and sections

### Fixed
- Layout breakage on mid-sized Android devices
- Inconsistent spacing between cube faces

---

## Initial Release
![stage](https://img.shields.io/badge/Stage-Working-yellow) ![version](https://img.shields.io/badge/Version-1.0.0-blue)
### Added
- Cube-based navigation using CSS 3D transforms
- Section-based single-page layout
- Vanilla HTML, CSS, and JavaScript implementation
- Deployment via GitHub Pages

---
