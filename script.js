// Função para alternar abas
document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.tab).classList.add("active");
    });
});

// Botão voltar
function switchToTab(tab) {
    document.querySelector(`[data-tab="${tab}"]`).click();
}

// Expandir blocos
function toggleBlock(block) {
    block.classList.toggle("expanded");
}

// Scroll-to-top
const scrollButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollButton.classList.add("visible");
    else scrollButton.classList.remove("visible");
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Carrossel
let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll(".carousel-slide");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(slide) {
    currentSlide = slide;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

// Configurações dinâmicas
const defaultConfig = {
    background_color: "#667eea",
    secondary_color: "#764ba2",
    surface_color: "#ffffff",
    text_color: "#333333",
    font_family: "Segoe UI",
    font_size: 16,
    main_title: "Maria Silva",
    subtitle: "Desenvolvedora Web",
    welcome_text: "Bem-vindo à minha página pessoal!",
    profile_title: "Sobre Mim",
    about_text: "Meu nome é Nicolly...",
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
    document.body.style.background =
        `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 100%)`;

    const content = document.querySelector('.content');
    content.style.background = config.surface_color || defaultConfig.surface_color;

    document.querySelectorAll('p, .contact-value').forEach(el => {
        el.style.color = config.text_color || defaultConfig.text_color;
        el.style.fontSize = `${fontSize}px`;
    });
}

