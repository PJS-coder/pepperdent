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

// Active Navigation Link Underline Highlight on Scroll & Page Location
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-link');

function updateActiveNav(targetKey) {
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        link.classList.remove('active');
        if (
            (targetKey === 'home' && (href === '#' || href === 'index.html' || href === './')) ||
            (targetKey === 'services' && (href.includes('services.html') || href === '#services')) ||
            (targetKey === 'about' && (href.includes('about.html') || href === '#about')) ||
            (targetKey === 'contact.html' && href.includes('contact.html')) ||
            (targetKey === 'services.html' && href.includes('services.html')) ||
            (targetKey === 'about.html' && href.includes('about.html')) ||
            (targetKey === 'kamla-nagar' && href.includes('dental-clinic-in-kamla-nagar'))
        ) {
            link.classList.add('active');
        }
    });

    mobileNavLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        link.classList.remove('active');
        if (
            (targetKey === 'home' && (href === '#' || href === 'index.html' || href === './')) ||
            (targetKey === 'services' && (href.includes('services.html') || href === '#services')) ||
            (targetKey === 'about' && (href.includes('about.html') || href === '#about')) ||
            (targetKey === 'contact.html' && href.includes('contact.html')) ||
            (targetKey === 'services.html' && href.includes('services.html')) ||
            (targetKey === 'about.html' && href.includes('about.html')) ||
            (targetKey === 'kamla-nagar' && href.includes('dental-clinic-in-kamla-nagar'))
        ) {
            link.classList.add('active');
        }
    });
}

function highlightNavLink() {
    const path = window.location.pathname;
    
    // Page checks for multi-page routing
    if (path.includes('dental-clinic-in-kamla-nagar')) {
        updateActiveNav('kamla-nagar');
        return;
    }
    if (path.includes('about.html')) {
        updateActiveNav('about.html');
        return;
    }
    if (
        path.includes('services.html') ||
        path.includes('dental-implants') ||
        path.includes('root-canal-treatment') ||
        path.includes('crowns-bridges') ||
        path.includes('braces-orthodontics') ||
        path.includes('clear-aligners') ||
        path.includes('teeth-whitening') ||
        path.includes('teeth-cleaning') ||
        path.includes('pediatric-dentistry') ||
        path.includes('mouth-ulcers') ||
        path.includes('laser-dentistry') ||
        path.includes('wisdom-teeth') ||
        path.includes('gum-treatment')
    ) {
        updateActiveNav('services.html');
        return;
    }
    if (path.includes('contact.html')) {
        updateActiveNav('contact.html');
        return;
    }

    // Scroll spy on home page (index.html)
    const scrollY = window.pageYOffset;
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 180;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSectionId = sectionId;
        }
    });

    if (currentSectionId === 'services') {
        updateActiveNav('services');
    } else if (currentSectionId === 'about') {
        updateActiveNav('about');
    } else {
        updateActiveNav('home');
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

// Google Reviews Arrow Navigation Slider
const reviewsTrack = document.getElementById('reviewsSliderTrack');
const reviewsPrevBtn = document.getElementById('reviewsPrevBtn');
const reviewsNextBtn = document.getElementById('reviewsNextBtn');

if (reviewsTrack && reviewsPrevBtn && reviewsNextBtn) {
    reviewsPrevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        reviewsTrack.scrollBy({ left: -380, behavior: 'smooth' });
    });
    reviewsNextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        reviewsTrack.scrollBy({ left: 380, behavior: 'smooth' });
    });
}
})();

