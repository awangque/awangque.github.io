![Alt text](PortfolioImageFBsize.jpg)
# Personal Portfolio Website

This repository hosts my **personal portfolio website**, designed as an interactive, cube-style interface where each face represents a different section of the site.

The website is fully static and deployed via **GitHub Pages**, serving as a personal space to explore ideas, experiments, and real project showcases.

---

## 🌐 Live Site

👉 https://awangque.github.io/

---

## ✨ Highlights

- 🎲 **Interactive Cube Navigation**
  - Website sections are presented as faces of a 3D cube
  - Navigation is smooth and does not reload the page

- 🧩 **Minimal & Framework-Free**
  - Built with plain **HTML, CSS, and JavaScript**
  - No Bootstrap, no React, no UI frameworks

- 📱 **Responsive Layout**
  - Optimized for desktop and mobile devices
  - Long content is handled gracefully on mobile

- 📩 **Contact Form (AJAX)**
  - Submits without page refresh
  - Uses Google Forms as a lightweight backend

- 🔐 **Basic Spam Protection**
  - reCAPTCHA v3 token generation
  - Honeypot field for bot prevention

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, media queries, 3D transforms)
- Vanilla JavaScript
- SweetAlert2
- Google Forms
- Google reCAPTCHA v3
- GitHub Pages

---

## 📱 Mobile Scrolling Behavior

Because the site uses an absolute-positioned cube layout:

- Global page scrolling is intentionally disabled
- Specific sections manage their own scrolling on mobile
- Scrollbars are hidden for a clean user experience
- Touch scrolling is explicitly supported on mobile browsers

This approach preserves the cube animation while keeping long content readable.

---

## 🚀 Deployment

This site is hosted using **GitHub Pages**.

To deploy:
1. Push changes to the `main` branch
2. Enable GitHub Pages in **Repository Settings**
3. Select the root (`/`) directory as the source
4. Wait for the build to complete

---

## ⚠️ Notes & Limitations

- reCAPTCHA v3 is implemented client-side only
- No server-side validation due to static hosting
- Intended for personal portfolio and experimentation

---

## 🔮 Possible Enhancements

- Server-side form handling using Google Apps Script
- Email notifications for contact submissions
- Accessibility improvements (ARIA, reduced motion)
- Performance tuning for low-end mobile devices

---

## Credits

Layout inspiration derived from a public frontend tutorial. All functionality, data flow, and integrations are independently implemented.
**Built as a hands-on, framework-free web experiment.**

## License

MIT License

Copyright (c) 2025 Awg Que

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.


