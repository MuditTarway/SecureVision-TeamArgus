document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    navSlide();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile nav after clicking a link
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.burger');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = ''; // Reset animation
                });
            }
        });
    });

    // Payment Form Submission (Mockup)
    const paymentForm = document.getElementById('payment-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Here you would typically send data to a backend or payment gateway
            // For this mockup, we just show a thank you message.

            this.style.display = 'none'; // Hide the form
            thankYouMessage.style.display = 'block'; // Show the thank you message

            // Optional: Reset form fields after a short delay
            setTimeout(() => {
                // To show the form again and hide thank you message
                // this.style.display = 'block';
                // thankYouMessage.style.display = 'none';
                // this.reset();
            }, 5000); // For demonstration, hide after 5 seconds
        });
    }

    // Contact Form Submission (Mockup)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            alert('Thank you for your message! We will get back to you soon.');
            this.reset(); // Clear the form fields
        });
    }
});