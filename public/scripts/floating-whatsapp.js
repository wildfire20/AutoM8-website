(function () {
    'use strict';
    if (document.querySelector('.floating-whatsapp')) return;
    var link = document.createElement('a');
    link.className = 'floating-whatsapp';
    link.href = 'https://wa.me/27681536136?text=Hi%20AutoM8%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20website%2C%20custom%20system%20or%20automation%20for%20my%20organisation.';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'Chat with AutoM8 on WhatsApp');
    link.innerHTML = '<i class="fab fa-whatsapp" aria-hidden="true"></i><span>Chat on WhatsApp</span>';
    document.body.appendChild(link);
}());