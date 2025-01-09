// script.js

// Animation de défilement au clic sur un bouton
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projets').scrollIntoView({ behavior: 'smooth' });
});
