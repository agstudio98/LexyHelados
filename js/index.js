// Navbar scroll effect
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Reveal animations on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Carousel functionality
const track = document.getElementById('carouselTrack');
const slides = track.querySelectorAll('.carousel-slide');
let idx = 0;
const slideW = 380 + 24; // slide width + gap

function goTo(n) {
  idx = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx * slideW}px)`;
}

document.getElementById('carouselNext').addEventListener('click', () => goTo(idx + 1));
document.getElementById('carouselPrev').addEventListener('click', () => goTo(idx - 1));

// Auto-advance carousel every 4 seconds
setInterval(() => goTo(idx + 1), 4000);

