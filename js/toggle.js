/**
 * Toggle.js - Handles the toggling of work experience details
 */

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the parent timeline-content
            const timelineContent = this.closest('.timeline-content');
            
            // Find the timeline-details within the parent
            const timelineDetails = timelineContent.querySelector('.timeline-details');
            
            // Toggle the display of timeline-details
            if (timelineDetails.style.display === 'block') {
                timelineDetails.style.display = 'none';
                this.textContent = 'Show More';
            } else {
                timelineDetails.style.display = 'block';
                this.textContent = 'Show Less';
            }
        });
    });
});