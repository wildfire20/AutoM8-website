// AutoM8 Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.slide-up, .feature-card, .service-card, .value-card, .team-member, .testimonial-card, .portfolio-item, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Prepare email content
            const subject = `AutoM8 Contact Form: ${data.service ? data.service : 'General Inquiry'}`;
            let emailBody = `New contact form submission from AutoM8 website:\n\n`;
            emailBody += `Name: ${data.name}\n`;
            emailBody += `Email: ${data.email}\n`;
            emailBody += `Phone: ${data.phone || 'Not provided'}\n`;
            emailBody += `Organization: ${data.organization || 'Not provided'}\n`;
            emailBody += `Service Interest: ${data.service || 'Not specified'}\n`;
            if (data.selectedPlan) {
                emailBody += `Selected Plan: ${data.selectedPlan}\n`;
            }
            emailBody += `\nMessage:\n${data.message}\n\n`;
            emailBody += `Submitted on: ${new Date().toLocaleString()}\n`;

            // Create mailto link
            const mailtoLink = `mailto:autom8streamlining@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            showNotification('Opening your email client to send the message...', 'success');
            
            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
                // Hide plan selection if it was shown
                const planSection = document.getElementById('planSelection');
                if (planSection) {
                    planSection.style.display = 'none';
                }
            }, 2000);
        });
    }

    // Handle plan selection from URL parameters (for contact page)
    if (window.location.pathname.includes('contact.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const plan = urlParams.get('plan');
        const price = urlParams.get('price');
        
        if (plan && price) {
            const planField = document.getElementById('selectedPlan');
            const planSection = document.getElementById('planSelection');
            const serviceField = document.getElementById('service');
            
            if (planField && planSection) {
                planField.value = `${plan} Plan - R${price} per student per month`;
                planSection.style.display = 'block';
                
                // Auto-select school management system
                if (serviceField) {
                    serviceField.value = 'school-management';
                }
                
                // Pre-fill message
                const messageField = document.getElementById('message');
                if (messageField && !messageField.value) {
                    messageField.value = `Hi! I'm interested in the ${plan} plan at R${price} per student per month. Please provide more information about getting started.`;
                }
            }
        }
    }

    // Pricing calculator (if needed)
    const pricingInputs = document.querySelectorAll('.pricing-input');
    if (pricingInputs.length > 0) {
        pricingInputs.forEach(input => {
            input.addEventListener('input', calculatePricing);
        });
    }

    // FAQ Accordion (if implemented)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        if (question) {
            question.style.cursor = 'pointer';
            question.addEventListener('click', function() {
                const answer = item.querySelector('p');
                const isOpen = answer.style.display === 'block';
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    const otherAnswer = otherItem.querySelector('p');
                    otherAnswer.style.display = 'none';
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isOpen) {
                    answer.style.display = 'block';
                    item.classList.add('active');
                }
            });
        }
    });

    // Portfolio filter (if implemented)
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Loading animation
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current).toLocaleString() + '+';
                setTimeout(updateCounter, 20);
            } else {
                stat.textContent = target.toLocaleString() + '+';
            }
        };
        
        // Start counter when element is visible
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counterObserver.observe(stat);
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2563eb, #7c3aed);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Pricing card selection
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            pricingCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Remove on click
    notification.addEventListener('click', function() {
        this.style.transform = 'translateX(400px)';
        setTimeout(() => {
            this.remove();
        }, 300);
    });
}

function calculatePricing() {
    const studentCount = document.getElementById('studentCount')?.value || 0;
    const plan = document.querySelector('input[name="plan"]:checked')?.value || 'base';
    
    const prices = {
        base: 15,
        pro: 22,
        premium: 35
    };
    
    const totalPrice = studentCount * prices[plan];
    const resultElement = document.getElementById('pricingResult');
    
    if (resultElement) {
        resultElement.textContent = `R${totalPrice.toLocaleString()} per month`;
    }
}

// Dark mode toggle (if implemented)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Google Analytics (placeholder)
function gtag() {
    dataLayer.push(arguments);
}

// Export functions for use in other scripts
window.AutoM8 = {
    showNotification,
    calculatePricing,
    toggleDarkMode,
    isValidEmail
};

// Plan Selection Function
function choosePlan(planName, price) {
    // Show a confirmation dialog
    const message = `You've selected the ${planName} plan at R${price} per student per month.\n\nWould you like to get started with ${planName}?`;
    
    if (confirm(message)) {
        // Create a form with plan details and redirect to contact page
        const form = document.createElement('form');
        form.method = 'GET';
        form.action = 'contact.html';
        
        // Add plan details as URL parameters
        const planInput = document.createElement('input');
        planInput.type = 'hidden';
        planInput.name = 'plan';
        planInput.value = planName;
        
        const priceInput = document.createElement('input');
        priceInput.type = 'hidden';
        priceInput.name = 'price';
        priceInput.value = price;
        
        form.appendChild(planInput);
        form.appendChild(priceInput);
        document.body.appendChild(form);
        form.submit();
    }
}

// Make choosePlan globally available
window.choosePlan = choosePlan;

// Email Composer Function
function openEmailComposer() {
    const subject = 'Inquiry about AutoM8 Services';
    const body = `Hello AutoM8 Team,

I'm interested in learning more about your services. 

Please provide me with information about:
- 
- 
- 

Best regards,
[Your Name]
[Your Organization]
[Your Contact Information]`;

    const mailtoLink = `mailto:autom8streamlining@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Make email composer globally available
window.openEmailComposer = openEmailComposer;
