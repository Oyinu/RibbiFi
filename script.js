// Simplified and unified animation system
document.addEventListener("DOMContentLoaded", () => {
    // Single observer for all animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that need animation
    const elementsToObserve = [
        '.hero h1',
        '.hero p', 
        '.cta-buttons',
        '.section',
        '.about-main',
        '.about-main h2',
        
        '#features h2',
        '.features-img',
        '.tokenomics-chart',
        '.roadmap-phase',
        '#roadmap-phase-2',
        '#roadmap-phase-3',
        '#tokenomics h2',
        '#roadmap h2',
        '#community h2',
        ".another",
        '.ca',
        // Add any other elements you want animated
    ];

    elementsToObserve.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Floating rabbits animation enhancement
    const rabbits = document.querySelectorAll('.rabbit');
    rabbits.forEach((rabbit, index) => {
        rabbit.addEventListener('mouseenter', () => {
            rabbit.style.animation = 'none';
            rabbit.style.transform = 'scale(1.2) rotate(10deg)';
            rabbit.style.transition = 'all 0.3s ease';
        });

        rabbit.addEventListener('mouseleave', () => {
            rabbit.style.animation = `float 6s ease-in-out infinite`;
            rabbit.style.animationDelay = `${-2 * (index + 1)}s`;
            rabbit.style.transform = '';
        });
    });

    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tokenomics Chart
    const chartElement = document.getElementById("tokenomicsChart");
    if (chartElement) {
        const ctx = chartElement.getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Team", "Community", "Airdrop"],
                datasets: [{
                    data: [12.5, 62.5, 25],
                    backgroundColor: ["#042f1a", "#115d38", "#39ff14"],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            color: "#fff",
                            font: {family: 'VAGRounded'}
                        }
                    }
                }
            }
        });
    }

    // Add sparkle effects
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }

    // Add sparkle keyframes
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleFloat {
            0% { opacity: 1; transform: translateY(0px) rotate(0deg); }
            100% { opacity: 0; transform: translateY(-100px) rotate(360deg); }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Create sparkles periodically
    setInterval(createSparkle, 2000);

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});