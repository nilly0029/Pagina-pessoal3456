const textos = {
    sonhos: "Tenho um coração que sonha alto: viajar pelo mundo, aprender novas línguas e colecionar memórias que mudam quem eu sou. Quero viver histórias que iluminem meu futuro ✨",
    
    amigos: "Meus amigos são como pequenas constelações na minha vida — cada um brilha de um jeito especial. Eles me inspiram, me fazem sorrir e tornam tudo mais leve ✩",
    
    familia: "Minha família é meu porto seguro. Cresço com eles, aprendo com eles e encontro força em cada momento compartilhado. É amor que me sustenta 💕",
    
    hobbies: "Desenhar, ler fantasia e criar coisas novas são formas de transformar sentimentos em arte. Meu mundo criativo é onde eu respiro e me reencontro 🎨"
};

/* ABRE MODAL */
function openModal(tipo) {
    document.getElementById("modal-title").innerText = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    document.getElementById("modal-text").innerText = textos[tipo];

    document.getElementById("modal-bg").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

/* FECHA MODAL */
function closeModal() {
    document.getElementById("modal-bg").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

