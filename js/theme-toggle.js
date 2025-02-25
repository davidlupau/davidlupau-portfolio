/**
 * Theme toggle functionality
 * Allows switching between light and dark themes
 */

document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i><i class="fas fa-sun"></i>';
    document.body.appendChild(themeToggle);

    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // If a theme has been saved, use it
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        // If no saved theme but OS prefers dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        // Get the current theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Toggle the theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Set the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Save the theme preference
        localStorage.setItem('theme', newTheme);
    });

    // Listen for OS theme preference change
    prefersDarkScheme.addEventListener('change', function(e) {
        // Only change if user hasn't set a preference
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
        }
    });
});