// ===========================
// Configuração padrão
// ===========================
const defaultConfig = {
  background_color: "#667eea",
  secondary_color: "#764ba2",
  surface_color: "#ffffff",
  text_color: "#333333",
  accent_color: "#f8f9fa",
  font_family: "Segoe UI",
  font_size: 16,
  main_title: "Maria Silva",
  subtitle: "Desenvolvedora Web",
  welcome_text: "Bem-vindo à minha página pessoal! Aqui você pode conhecer mais sobre mim, minhas habilidades e como entrar em contato.",
  profile_title: "Sobre Mim",
  about_text: "Meu nome é Nicolly e sou uma pessoa cheia de sonhos e vontade de evoluir...",
  contact_title: "Entre em Contato",
  email_label: "Email",
  phone_label: "Telefone",
  location_label: "Localização"
};

// ===========================
// Switch de tabs
// ===========================
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function switchToTab(tabName) {
  tabs.forEach(t => t.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));
  const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    switchToTab(targetTab);
  });
});

document.getElementById('learn-more-btn')?.addEventListener('click', () => {
  switchToTab('profile');
});

// ===========================
// Toggle info-block
// ===========================
function toggleBlock(block) {
  block.classList.toggle('expanded');
}

// ===========================
// Carousel
// ===========================
let currentSlide = 0;
const totalSlides = 4;

function moveCarousel(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-track');

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-track');

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// ===========================
// Scroll to top
// ===========================
const scrollToTopBtn = document.getElementById('scrollToTop');
const contentArea = document.querySelector('.content');

contentArea.addEventListener('scroll', () => {
  if (contentArea.scrollTop > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

function scrollToTop() {
  contentArea.scrollTo({ top: 0, behavior: 'smooth' });
}
