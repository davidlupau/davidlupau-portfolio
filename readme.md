# David Lupau - Personal Website

This repository contains the source code for my personal website, which showcases my professional experience, skills, and portfolio as a Learning & Development Partner with a focus on AI and Data Science.

## Overview

This is a responsive personal website built with HTML, CSS, and JavaScript. The site features an animated user interface with scroll effects, expandable content sections, and a clean, professional design with an orange (#F28500) color scheme.

## Features

- **Responsive Design**: Fully mobile-friendly layout that adapts to all screen sizes
- **Animated UI**: Subtle animations using AOS (Animate On Scroll) library
- **Dark/Light Mode**: Theme toggle functionality for user preference
- **Interactive Elements**: Expandable sections, tabbed content, and smooth scrolling
- **Portfolio & Projects Gallery**: Showcasing technical projects and professional achievements
- **Social Media Integration**: Connect section with links to professional profiles

## Technologies Used

- HTML5
- CSS3 (with custom variables and responsive design)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- AOS (Animate On Scroll) Library
- Custom SVG icons for newer platforms

## Project Structure

```
david-lupau-website/
│
├── index.html              # Homepage
├── portfolio.html          # Portfolio page
├── projects.html           # Projects page
│
├── css/
│   ├── style.css           # Main stylesheet
│   ├── responsive.css      # Media queries for responsiveness
│   ├── animations.css      # Animation styles
│   ├── variables.css       # CSS variables
│   ├── theme.css           # Light/dark theme toggling
│   └── project-details.css # Styling for project detail pages
│
├── js/
│   ├── main.js             # Main JavaScript file
│   ├── toggle.js           # For expandable work experience sections
│   └── theme-toggle.js     # Theme toggling functionality
│
├── assets/
│   ├── images/             # Project thumbnails, profile photo, etc.
│   └── icons/              # Social media icons and other UI elements
│
└── project-pages/          # Individual project detail pages
    ├── project1.html
    ├── project2.html
    └── ...
```

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/david-lupau-website.git
   cd david-lupau-website
   ```

2. **View locally**
   - Open `index.html` in your web browser to view the site locally

3. **Deploy to GitHub Pages**
   - Enable GitHub Pages in repository settings
   - Select the main branch as source
   - Your site will be available at `https://yourusername.github.io/david-lupau-website`

## Customization

### Changing the Color Scheme

The site uses CSS variables for easy color customization. To change the primary color:

1. Open `css/variables.css` or `css/style.css`
2. Locate the `:root` section
3. Modify the `--primary` variable:
   ```css
   :root {
     --primary: #YourColorHere;
     /* Other variables */
   }
   ```

### Adding a New Project

1. Create a new HTML file in the `project-pages` directory
2. Add a new project card to `portfolio.html` or `projects.html`
3. Link the card to your new project page

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Feel free to reach out to me through any of the social media platforms linked on the website, or directly through GitHub.

---

© 2025 David Lupau. All rights reserved.
