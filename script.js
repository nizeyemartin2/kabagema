// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation (for the contact form)
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function(e) {
    const emailInput = contactForm.querySelector('input[type="email"]');
    if (!emailInput.value.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});