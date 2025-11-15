let currentPage = 'home';
const contentContainer = document.getElementById('content-container');
const navLinks = document.querySelectorAll('.nav-link');

const topicDetails = {
    sonhos: {
        title: "Meus Sonhos e Aspirações",
        icon: "star",
        color: "blue",
        shortName: "Sonhos",
        description: "Eu sonho em [...].",
        details: "Detalhes..."
    },
    amigos: {
        title: "A Importância dos Meus Amigos",
        icon: "users",
        color: "green",
        shortName: "Amigos",
        description: "Meus amigos são [...].",
        details: "Detalhes..."
    },
    familia: {
        title: "Minha Família é o Meu Alicerce",
        icon: "home",
        color: "red",
        shortName: "Família",
        description: "A família é [...].",
        details: "Detalhes..."
    },
    hobbies: {
        title: "O Que Gosto de Fazer (Hobbies)",
        icon: "gamepad",
        color: "purple",
        shortName: "Hobbies",
        description: "No meu tempo livre [...].",
        details: "Detalhes..."
    }
};

function createTopicCard(key, data) {
    return `
        <div class="topic-card bg-white rounded-xl shadow-lg border border-gray-100 cursor-pointer hover:scale-[1.03] transition" data-topic="${key}">
            <div class="bg-${data.color}-100 rounded-t-xl p-3 flex justify-between border-b-2 border-${data.color}-300">
                <h3 class="text-lg font-bold text-${data.color}-800">${data.shortName}</h3>
                <i data-lucide="${data.icon}" class="w-6 h-6 text-${data.color}-600"></i>
            </div>
            <div class="p-4 h-24">
                <p class="text-sm text-gray-700 line-clamp-3">${data.description}</p>
            </div>
            <div class="p-2 border-t text-center text-xs font-semibold text-${data.color}-600 bg-gray-50">
                Clique para ver mais!
            </div>
        </div>
    `;
}

const topicCardsHtml = Object.keys(topicDetails)
    .map(key => createTopicCard(key, topicDetails[key]))
    .join('');

const pageContent = {
    home: `
        <div class="hero-banner rounded-xl shadow-lg p-10 mb-8 h-[300px] relative flex items-center">
            <div class="absolute inset-0 opacity-10 bg-cover bg-center"></div>
            <div class="relative z-10 text-white max-w-lg">
                <span class="text-lg opacity-80">Conheça mais sobre:</span>
                <h1 class="text-6xl font-extrabold">Nicolly</h1>
                <p class="text-xl opacity-90">Sou estudante do ensino médio...</p>
                <button id="read-more" class="bg-white text-gray-800 px-6 py-2 rounded-full shadow-md">Saiba Mais</button>
            </div>
        </div>

        <h2 class="text-2xl font-extrabold text-gray-800 mb-6 border-b-2 border-indigo-400 pb-2">
            Um pouco mais sobre mim
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            ${topicCardsHtml}
        </div>
    `,
    profile: `
        <div class="bg-white p-10 rounded-xl shadow-lg mb-8">
            <button class="back-button text-blue-600 flex items-center mb-6">
                <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i> Voltar
            </button>

            <h2 class="text-3xl font-extrabold text-gray-800 mb-8 border-b-2 border-indigo-400 pb-3">
                Meu Perfil Detalhado
            </h2>

            <div class="flex flex-col lg:flex-row gap-8">

                <div class="w-full lg:w-1/3 flex flex-col items-center">
                    <div class="profile-frame w-64 h-64 rounded-full overflow-hidden bg-gray-100 mb-4">
                        <img src="https://placehold.co/256x256/a5b4fc/ffffff?text=Adicione+Sua+Foto" class="w-full h-full object-cover">
                    </div>
                </div>

                <div class="flex-grow">
                    <div class="bg-indigo-50 p-6 rounded-xl relative shadow-inner">
                        <h3 class="text-4xl font-extrabold text-gray-800 mb-1">Nicolly Domingues</h3>
                        <p class="text-sm font-medium text-indigo-600 mb-4">(Estudante)</p>

                        <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-400">
                            <h4 class="font-bold text-gray-700 mb-2">Sobre Mim:</h4>
                            <p class="text-gray-600">
                                Sou uma jovem dedicada e curiosa...
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `,
    contact: `
        <div class="bg-white p-8 rounded-xl shadow-lg">

            <button class="back-button text-blue-600 flex items-center mb-6">
                <i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i> Voltar
            </button>

            <h2 class="text-3xl font-bold text-gray-800 mb-6">Entre em Contato</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <a href="https://wa.me/5511999999999" target="_blank"
                   class="block p-6 rounded-xl shadow-md bg-green-50 hover:bg-green-100 border-b-4 border-green-500">
                    <div class="flex items-center space-x-4">
                        <i data-lucide="phone" class="w-8 h-8 text-green-600"></i>
                        <div>
                            <h3 class="text-xl font-bold text-green-700">WhatsApp</h3>
                        </div>
                    </div>
                </a>

                <a href="https://instagram.com/seunome" target="_blank"
                   class="block p-6 rounded-xl shadow-md bg-pink-50 hover:bg-pink-100 border-b-4 border-pink-500">
                    <div class="flex items-center space-x-4">
                        <i data-lucide="instagram" class="w-8 h-8 text-pink-600"></i>
                        <div>
                            <h3 class="text-xl font-bold text-pink-700">Instagram</h3>
                        </div>
                    </div>
                </a>

                <a href="mailto:email@exemplo.com"
                   class="block p-6 rounded-xl shadow-md bg-indigo-50 hover:bg-indigo-100 border-b-4 border-indigo-500">
                    <div class="flex items-center space-x-4">
                        <i data-lucide="mail" class="w-8 h-8 text-indigo-600"></i>
                        <div>
                            <h3 class="text-xl font-bold text-indigo-700">Email</h3>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    `
};

function renderContent(pageKey) {
    currentPage = pageKey;
    contentContainer.innerHTML = pageContent[currentPage];

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === currentPage) link.classList.add('active');
    });

    lucide.createIcons();

    if (currentPage === 'home') {
        document.querySelectorAll('.topic-card').forEach(card => {
            card.onclick = () => showTopicDetails(card.dataset.topic);
        });

        document.getElementById('read-more').onclick = () => renderContent('profile');
    }

    document.querySelectorAll('.back-button').forEach(btn => {
        btn.onclick = () => renderContent('home');
    });
}

function showTopicDetails(topicKey) {
    const data = topicDetails[topicKey];
    const modalOverlay = document.getElementById('topic-modal-overlay');
    const modalContent = document.getElementById('topic-modal-content');

    modalContent.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-2xl font-bold flex items-center">
                <i data-lucide="${data.icon}" class="w-6 h-6 mr-3"></i>
                ${data.title}
            </h3>
            <button id="close-modal">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>

        <p class="bg-${data.color}-50 p-3 border-l-4 border-${data.color}-300 rounded-lg font-semibold italic">
            ${data.description}
        </p>

        <p class="mt-4">${data.details}</p>
    `;

    lucide.createIcons();

    modalOverlay.style.display = "flex";

    document.getElementById("close-modal").onclick = () =>
        modalOverlay.style.display = "none";

    modalOverlay.onclick = e => {
        if (e.target === modalOverlay) modalOverlay.style.display = "none";
    };
}

navLinks.forEach(link => {
    link.onclick = () => renderContent(link.dataset.page);
});

renderContent('home');
