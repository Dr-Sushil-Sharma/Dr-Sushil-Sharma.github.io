// === ANIMATED COUNTER SCRIPT ===
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.impact-number');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                
                // Calculate increment step
                const inc = target / speed * 5; // adjust speed multiplier

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                    // Add "+" if specifically requested via data attribute or class
                    if(target === 100) counter.innerText = "100%"; // Specific logic for percentage if needed
                }
            };
            updateCount();
        });
    };

    // Trigger animation when section is in view
    let options = { threshold: 0.5 };
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const section = document.getElementById('impact-section');
    if(section) observer.observe(section);
});
