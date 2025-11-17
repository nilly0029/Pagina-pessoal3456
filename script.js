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

async function onConfigChange(config) {
  const baseFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
  const fontSize = config.font_size || defaultConfig.font_size;

  document.body.style.fontFamily = `${baseFont}, ${baseFontStack}`;
  document.body.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 100%)`;

  const header = document.querySelector('.header');
  header.style.background = `rgba(255, 255, 255, 0.95)`;

  const content = document.querySelector('.content');
  content.style.background = config.surface_color || defaultConfig.surface_color;

  const allText = document.querySelectorAll('p, .contact-value');
  allText.forEach(el => {
    el.style.color = config.text_color || defaultConfig.text_color;
    el.style.fontSize = `${fontSize}px`;
  });

  const h1Elements = document.querySelectorAll('.home-content h1, .profile-content h2, .contact-content h2');
  h1Elements.forEach(el => {
    el.style.color = config.background_color || defaultConfig.background_color;
    el.style.fontSize = `${fontSize * 2}px`;
  });

  const h2Elements = document.querySelectorAll('.home-content h2, .skills h3');
  h2Elements.forEach(el => {
    el.style.color = config.secondary_color || defaultConfig.secondary_color;
    el.style.fontSize = `${fontSize * 1.5}px`;
  });

  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    activeTab.style.background = config.background_color || defaultConfig.background_color;
  }

  const learnMoreBtn = document.getElementById('learn-more-btn');
  if (learnMoreBtn) {
    learnMoreBtn.style.background = config.background_color || defaultConfig.background_color;
  }

  const backBtns = document.querySelectorAll('.back-btn');
  backBtns.forEach(btn => {
    btn.style.background = config.background_color || defaultConfig.background_color;
  });

  const contactItems = document.querySelectorAll('.contact-item, .info-block');
  contactItems.forEach(el => {
    el.style.background = config.accent_color || defaultConfig.accent_color;
  });

  const profileCard = document.querySelector('.profile-card');
  if (profileCard) {
    profileCard.style.background = config.accent_color || defaultConfig.accent_color;
  }

  const photoPlaceholder = document.querySelector('.photo-placeholder');
  if (photoPlaceholder) {
    photoPlaceholder.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 100%)`;
  }

  const profilePhotoPlaceholder = document.querySelector('.profile-photo-placeholder');
  if (profilePhotoPlaceholder) {
    profilePhotoPlaceholder.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 100%)`;
  }

  const detailedDescription = document.querySelector('.detailed-description');
  if (detailedDescription) {
    detailedDescription.style.background = config.accent_color || defaultConfig.accent_color;
  }

  const infoBlocks = document.querySelectorAll('.info-block');
  infoBlocks.forEach(el => {
    el.style.borderTopColor = config.background_color || defaultConfig.background_color;
  });

  const infoBlockTitles = document.querySelectorAll('.info-block-title');
  infoBlockTitles.forEach(el => {
    el.style.color = config.background_color || defaultConfig.background_color;
  });

  const contactLabels = document.querySelectorAll('.contact-label');
  contactLabels.forEach(el => {
    el.style.color = config.secondary_color || defaultConfig.secondary_color;
    el.style.fontSize = `${fontSize * 0.875}px`;
  });

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

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => { config.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
      },
      {
        get: () => config.secondary_color || defaultConfig.secondary_color,
        set: (value) => { config.secondary_color = value; window.elementSdk.setConfig({ secondary_color: value }); }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => { config.surface_color = value; window.elementSdk.setConfig({ surface_color: value }); }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => { config.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => { config.font_family = value; window.elementSdk.setConfig({ font_family: value }); }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => { config.font_size = value; window.elementSdk.setConfig({ font_size: value }); }
    }
  };
}

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

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

function switchToTab(tabName) {
  tabs.forEach(t => t.classList.remove('active'));
  tabContents.forEach(tc => tc.classList.remove('active'));

  const targetTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
    document.getElementById(tabName).classList.add('active');

    const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
    targetTab.style.background = config.background_color || defaultConfig.background_color;

    tabs.forEach(t => {
      if (!t.classList.contains('active')) {
        t.style.background = '#f0f0f0';
      }
    });
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    switchToTab(targetTab);
  });
});

const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    switchToTab('profile');
  });
}

function toggleBlock(block) {
  block.classList.toggle('expanded');
}

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
  else if (currentSlide >= totalSlides) currentSlide = 0;

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
  contentArea.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


