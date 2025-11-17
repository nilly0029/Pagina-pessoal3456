// ==========================
// SWITCH DE TABS
// ==========================
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function switchToTab(tabName) {
  tabs.forEach(t => t.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));
  
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(tabName).classList.add('active');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => switchToTab(tab.getAttribute('data-tab')));
});

// ==========================
// BOTÃO LEARN MORE
// ==========================
document.getElementById('learn-more-btn')?.addEventListener('click', () => {
  switchToTab('profile');
});

// ==========================
// TOGGLE INFO BLOCK
// ==========================
function toggleBlock(block) { block.classList.toggle('expanded'); }

// ==========================
// CARROSSEL
// ==========================
let currentSlide = 0;
const totalSlides = 4;

function moveCarousel(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-track');

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function goToSlide(index) { moveCarousel(index - currentSlide); }

// ==========================
// SCROLL TO TOP
// ==========================
const scrollToTopBtn = document.getElementById('scrollToTop');
const contentArea = document.querySelector('.content');

contentArea.addEventListener('scroll', () => {
  if (contentArea.scrollTop > 300) scrollToTopBtn.classList.add('visible');
  else scrollToTopBtn.classList.remove('visible');
});

function scrollToTop() {
  contentArea.scrollTo({ top: 0, behavior: 'smooth' });
}
