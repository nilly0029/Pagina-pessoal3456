// Configuração padrão
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
  about_text: "Meu nome é Nicolly e sou uma pessoa cheia de sonhos e vontade de evoluir. Gosto de aprender, criar e buscar sempre o melhor para mim e para quem está ao meu redor. Valorizo minha família, meus amigos e tudo o que me faz crescer. Estou sempre construindo meu futuro com determinação e fé.",
  contact_title: "Entre em Contato",
  email_label: "Email",
  phone_label: "Telefone",
  location_label: "Localização"
};

// Atualiza a página quando a configuração muda
async function onConfigChange(config) {
  const baseFont = config.font_family || defaultConfig.font_family;
  const fontSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${baseFont}, Segoe UI, Tahoma, Geneva, Verdana, sans-serif`;
  document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 100%)`;

  document.querySelector('.content').style.background = config.surface_color || defaultConfig.surface_color;

  const allText = document.querySelectorAll('p, .contact-value');
  allText.forEach(el => {
    el.style.color = config.text_color || defaultConfig.text_color;
    el.style.fontSize = `${fontSize}px`;
  });

  document.querySelectorAll('.home-content h1, .profile-content h2, .contact-content h2')
          .forEach(el => el.style.color = config.background_color || defaultConfig.background_color);

  document.querySelectorAll('.home-content h2, .skills h3')
          .forEach(el => el.style.color = config.secondary_color || defaultConfig.secondary_color);

  document.getElementById('main-title').textContent = config.main_title || defaultConfig.main_title;
  document.getElementById('subtitle').textContent = config.subtitle || defaultConfig.subtitle;
  document.getElementById('welcome-text').textContent = config.welcome_text || defaultConfig.welcome_text;
  document.getElementById('profile-title').textContent = config.profile_title || defaultConfig.profile_title;
  document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
  document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
  document.getElementById('email-label').textContent = config.email_label || defaultConfig.email_label;
  document.getElementById('phone-label').textContent = config.phone_label || defaultConfig.phone_label;
  document.getElementById('location-label').textContent = config.location_label || defaultConfig.location_label;
}

// Mapear capacidades editáveis
function mapToCapabilities(config) {
  return {
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: v => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => config.secondary_color || defaultConfig.secondary_color, set: v => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } },
      { get: () => config.surface_color || defaultConfig.surface_color, set: v => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
      { get: () => config.text_color || defaultConfig.text_color, set: v => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
      { get: () => config.accent_color || defaultConfig.accent_color, set: v => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } }
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: v => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: v => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
  };
}

// Valores para painel de edição
function mapToEditPanelValues(config) {
  return new Map([
    ["main_title", config.main_title || defaultConfig.main_title],
    ["subtitle", config.subtitle || defaultConfig.subtitle],
    ["welcome_text", config.welcome_text || defaultConfig.welcome_text],
    ["profile_title", config.profile_title || defaultConfig.profile_title],
    ["about_text", config.about_text || defaultConfig.about_text],
    ["contact_title", config.contact_title || defaultConfig.contact_title],
    ["email_label", config.email_label || defaultConfig.email_label],
    ["phone_label", config.phone_label || defaultConfig.phone_label],
    ["location_label", config.location_label || defaultConfig.location_label]
  ]);
}

// Inicialização do SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Lógica de abas
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

tabs.forEach(tab => tab.addEventListener('click', () => switchToTab(tab.getAttribute('data-tab'))));

const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => switchToTab('profile'));
}

// Expandir blocos de informação
function toggleBlock(block) {
  block.classList.toggle('expanded');
}

// Carousel
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

// Scroll to top
const scrollToTopBtn = document.getElementById('scrollToTop');
const contentArea = document.querySelector('.content');

contentArea.addEventListener('scroll', () => {
  scrollToTopBtn.classList.toggle('visible', contentArea.scrollTop > 300);
});

function scrollToTop() {
  contentArea.scrollTo({ top: 0, behavior: 'smooth' });
}
