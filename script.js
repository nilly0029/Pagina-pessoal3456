// =============================
// MENU INTERATIVO (ROLAGEM SUAVE)
// =============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const section = document.querySelector(link.getAttribute("href"));
        const topPosition = section.offsetTop - 80;

        window.scrollTo({
            top: topPosition,
            behavior: "smooth"
        });
    });
});

// =============================
// BOTÃO DE CONTATO (WHATSAPP)
// =============================
const whatsappBtn = document.getElementById("btnWhats");

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        window.open("https://wa.me/5541997765528", "_blank");
    });
}

// =============================
// BOTÃO DE EMAIL
// =============================
const emailBtn = document.getElementById("btnEmail");

if (emailBtn) {
    emailBtn.addEventListener("click", () => {
        window.location.href = "mailto:nicolly.remeniuk@escola.pr.gov.br";
    });
}

// =============================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// =============================
const cards = document.querySelectorAll(".card");

function animarCards() {
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * i);
    });
}

window.addEventListener("load", () => {
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
    });

    animarCards();
});

