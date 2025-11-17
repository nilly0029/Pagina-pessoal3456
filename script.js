// ELEMENTOS
const links = document.querySelectorAll(".nav-link");
const content = document.getElementById("content-container");
const modalOverlay = document.getElementById("topic-modal-overlay");
const modalContent = document.getElementById("topic-modal-content");
const backToTop = document.getElementById("back-to-top-btn");

// CONTEÚDOS DAS PÁGINAS
const pages = {
    home: `
        <h1>Bem-vinda, Nicolly!</h1>
        <p>Este é o início do seu site totalmente responsivo e funcional.</p>
    `,

    profile: `
        <h1>Perfil</h1>
        <p>Seu perfil personalizável com informações sobre você.</p>
    `,

    contact: `
        <h1>Contato</h1>
        <p>Email: <a href="mailto:nicolly.remeniuk@escola.pr.gov.br">Enviar email</a></p>
        <p>WhatsApp: <a href="https://wa.me/5541997765528" target="_blank">Clique aqui</a></p>
    `
};

// FUNÇÃO PARA MUDAR DE PÁGINA
function loadPage(page) {
    content.innerHTML = pages[page];

    links.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-page="${page}"]`).classList.add("active");
}

// EVENTOS DOS BOTÕES DO MENU
links.forEach(btn => {
    btn.addEventListener("click", () => {
        loadPage(btn.dataset.page);
    });
});

// MODAL (para o futuro, se quiser usar)
function openModal(html) {
    modalContent.innerHTML = html;
    modalOverlay.style.display = "flex";
}

modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

// VOLTAR AO TOPO
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// CARREGAR INÍCIO AUTOMATICAMENTE
loadPage("home");
