// ============================================================================
// KSM Servicios - Main JavaScript
// ============================================================================

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });

    // Header background on scroll
    const header = document.querySelector('.ksm-header');
    if (scrollY > 50) {
        header.style.background = 'rgba(10, 10, 30, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
    } else {
        header.style.background = 'rgba(10, 10, 30, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
        submitBtn.disabled = true;

        try {
            // Here you would integrate with your email service (EmailJS, etc.)
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Show success message
            showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
            contactForm.reset();
        } catch (error) {
            showNotification('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 2rem;
    background: ${type === 'success' ? 'rgba(0, 212, 255, 0.9)' : 'rgba(255, 0, 0, 0.9)'};
    color: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slide-in-right 0.5s ease-out;
  `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slide-in-left 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// Service Card Interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    const btn = card.querySelector('.service-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            const serviceName = card.querySelector('h3').textContent;
            showNotification(`Interesado en ${serviceName}. ¡Contáctanos para más información!`, 'info');
            scrollToSection('contacto');
        });
    }
});

// Typing Effect Enhancement
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console Easter Egg
console.log('%c🌌 KSM Servicios', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cExploring the Digital Cosmos', 'font-size: 14px; color: #9d4edd;');
console.log('%c¿Interesado en trabajar con nosotros? Contáctanos!', 'font-size: 12px; color: #ffffff;');
