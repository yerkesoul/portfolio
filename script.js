// Initialize ScrollReveal for smooth animations
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations for sections
ScrollReveal().reveal('.section', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    opacity: 0
});

