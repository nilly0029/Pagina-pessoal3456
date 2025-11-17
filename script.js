// script.js
// Sistema de navegação entre páginas

// Conteúdos das páginas
const pages = {
    home: `
        <section class="page-section">
            <h2>Bem-vinda, Nicolly!</h2>
            <p>Este é o início do seu site personalizado.</p>
        </section>
    `,
    profile: `
        <section class="page-section">
            <h2>Meu Perfil</h2>
            <p>Aqui você pode colocar suas informações pessoais, hobbies, sonhos e muito mais.</p>
        </section>
    `,
    contact: `
        <section class="page-section">
            <h2>Contato</h2>
            <p>Email: nicolly.remeniuk@escola.pr.gov.br</p>
            <p>WhatsApp: <a href="https://wa.me/5541997765528" target="_blank">Clique para conversar</a></p>
        </section>
    `
};

// Área onde o conteúdo aparece
const content = document.getElementById("content");

// Carrega página inicial
content.innerHTML = pages.home;

// Ativa os botões de navegação
document.querySelectorAll(".nav-link").forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");
        content.innerHTML = pages[page];
    });
});
