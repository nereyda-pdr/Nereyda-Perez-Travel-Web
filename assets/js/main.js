// Initialize Granim.js animated gradient background on the hero canvas (warm tropical colors)
const granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#f2644b', '#a044c2'],
                ['#f59e0b', '#e84a5f'],
                ['#19a6b5', '#693c72']
            ],
            transitionSpeed: 5000
        }
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true
});

// Initialize Swiper.js carousel
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Leaflet.js interactive map centered in Mexico City
const map = L.map('leaflet-map').setView([19.4326, -99.1332], 5); // Centered in Mexico & Central America region

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a sample marker for the Mexico City headquarters
L.marker([19.4326, -99.1332]).addTo(map)
  .bindPopup('<b>Paraiso Mexico City!</b><br>Our regional headquarters.')
  .openPopup();

// Initialize GLightbox gallery with focus cleanup to prevent aria-hidden warnings
document.querySelectorAll('.glightbox').forEach((link) => {
    link.addEventListener('click', () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }, true);
});

const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    keyboardNavigation: true
});