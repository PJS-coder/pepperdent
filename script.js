(() => {
// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Before/After Comparison Slider
const comparisonSlider = document.getElementById('comparisonSlider');
const beforeWrapper = document.getElementById('beforeWrapper');
const sliderHandle = document.getElementById('sliderHandle');

if (comparisonSlider && beforeWrapper && sliderHandle) {
    let isSliding = false;
    let sliderPosition = 50; // Start at 50%

    function updateSlider(clientX) {
        const rect = comparisonSlider.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        sliderPosition = Math.max(0, Math.min(100, percentage));
        
        beforeWrapper.style.clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
        sliderHandle.style.left = `${sliderPosition}%`;
    }

    // Mouse events
    comparisonSlider.addEventListener('mousedown', (e) => {
        isSliding = true;
        updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
        if (isSliding) {
            updateSlider(e.clientX);
        }
    });

    document.addEventListener('mouseup', () => {
        isSliding = false;
    });

    // Touch events
    comparisonSlider.addEventListener('touchstart', (e) => {
        isSliding = true;
        updateSlider(e.touches[0].clientX);
    });

    comparisonSlider.addEventListener('touchmove', (e) => {
        if (isSliding) {
            e.preventDefault();
            updateSlider(e.touches[0].clientX);
        }
    });

    comparisonSlider.addEventListener('touchend', () => {
        isSliding = false;
    });

    // Initialize slider position
    beforeWrapper.style.clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
    sliderHandle.style.left = `${sliderPosition}%`;
}

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const path = window.location.pathname;
    
    // Check if we are on the about page
    if (path.includes('about.html')) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('about.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        return;
    }

    // Check if we are on the services page
    if (path.includes('services.html')) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('services.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        return;
    }

    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Highlight "Home" when at top
    if (scrollY < 300) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' || link.getAttribute('href') === 'index.html' || link.getAttribute('href') === './') {
                link.classList.add('active');
            }
        });
    }
}

// Initialize active state on load
highlightNavLink();
window.addEventListener('scroll', highlightNavLink);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
})();

