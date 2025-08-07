// Website Interactive Elements
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website initialized successfully!");

    /**
     * Scroll-triggered animation observer
     * Animates elements when they come into view
     */
    const initScrollAnimations = () => {
        // Get all elements with the 'animate-on-scroll' class
        const animatableElements = document.querySelectorAll('.animate-on-scroll');
        
        if (animatableElements.length === 0) return;

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px' // slight bottom margin to trigger a bit earlier
        };

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in-view');
                    observer.unobserve(entry.target);
                    
                    // Optional: Add event listener for animation end
                    entry.target.addEventListener('animationend', () => {
                        entry.target.classList.add('animation-complete');
                    }, { once: true });
                }
            });
        }, observerOptions);

        animatableElements.forEach(element => {
            // Add initial hidden state
            element.classList.add('pre-animation');
            animationObserver.observe(element);
        });
    };

    /**
     * Initialize all interactive components
     */
    const init = () => {
        initScrollAnimations();
        
        // Add more initialization functions here as needed
        // Example: initMobileMenu(), initFormValidation(), etc.
    };

    // Start the initialization
    init();
});