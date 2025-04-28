// Improved scroll animation for elements
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('.feature-card, .benefit-card');
    
    const elementInView = (el, scrollOffset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= window.innerHeight - scrollOffset;
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('animated');
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    };
    
    const hideScrollElement = (element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            // Only apply animation if element hasn't been animated yet
            if (!el.classList.contains('animated') && elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Initialize elements
    scrollElements.forEach((el) => {
        // Set initial styles
        el.style.transition = "all 0.6s ease";
        hideScrollElement(el);
    });
    
    // Add scroll event listener with throttling to improve performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleScrollAnimation();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    // Initial check
    handleScrollAnimation();
});