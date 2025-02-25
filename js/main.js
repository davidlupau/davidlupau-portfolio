/**
 * Main JavaScript file for David Lupau's personal website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Certificate tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to selected button and tab
                button.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Check if the target element exists
            if (targetId !== '#' && document.querySelector(targetId)) {
                const targetElement = document.querySelector(targetId);
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation links based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href && href.includes('#' + currentSection)) {
                link.classList.add('active');
            }
        });
    }
    
    // Update nav links on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Placeholder images for portfolio/projects until real ones are added
    function setPlaceholderColors() {
        const portfolioImages = document.querySelectorAll('.portfolio-img img');
        
        if (portfolioImages.length > 0) {
            portfolioImages.forEach((img, index) => {
                if (!img.src || img.src.includes('placeholder')) {
                    // Create a placeholder with different colors
                    const colors = ['#F28500', '#FF9E33', '#D07100', '#FFAC4A'];
                    const bgColor = colors[index % colors.length];
                    
                    img.style.backgroundColor = bgColor;
                    img.alt = 'Project thumbnail';
                }
            });
        }
    }
    
    setPlaceholderColors();
    
    // Initialize page based on URL hash
    function initPageFromHash() {
        const hash = window.location.hash;
        
        if (hash) {
            const targetElement = document.querySelector(hash);
            
            if (targetElement) {
                setTimeout(() => {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }
    
    initPageFromHash();
});