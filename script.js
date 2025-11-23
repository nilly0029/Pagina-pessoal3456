// ABAS
function openTab(tab) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

    document.getElementById(tab).classList.add("active");
    event.target.classList.add("active");
}

// TEXTOS DAS DESCRIÇÕES
const textos = {
    sonhos: "Sempre sonhei em fazer intercâmbio e viajar pelo mundo. Quero conhecer novas culturas, aprender idiomas e viver experiências que me ajudem a crescer como pessoa.",
    amigos: "Meus amigos são pessoas incríveis. Cada um deles me inspira de um jeito diferente e torna meus dias melhores.",
    familia: "Eu moro com minha mãe e meu irmão, que são minha base e maior apoio. Nossa união me fortalece.",
    hobbies: "Adoro ler fantasia, criar artes com limpador de cachimbo e desenhar como forma de expressão."
};

// ABRIR MODAL
function openModal(tipo) {
    document.getElementById("modal-title").innerText = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    document.getElementById("modal-text").innerText = textos[tipo];

    document.getElementById("modal-bg").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

// FECHAR MODAL
function closeModal() {
    document.getElementById("modal-bg").style.display = "none";
    document.getElementById("modal").style.display = "none";
}
