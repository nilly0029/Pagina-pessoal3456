const descriptions = {
    familia: `
        <div class="text-gray-700">
            <h3 class="text-xl font-semibold text-pink-600 mb-2 flex items-center"><i class="fas fa-heart mr-2"></i> Família</h3>
            <p>Eu moro com a minha mãe e com o meu irmão...</p>
        </div>
    `,
    hobbies: `
        <div class="text-gray-700">
            <h3 class="text-xl font-semibold text-green-600 mb-2 flex items-center"><i class="fas fa-palette mr-2"></i> Hobbies</h3>
            <p>Eu gosto de ler livros principalmente de fantasia...</p>
        </div>
    `,
    amigos: `
        <div class="text-gray-700">
            <h3 class="text-xl font-semibold text-purple-600 mb-2 flex items-center"><i class="fas fa-users mr-2"></i> Meus Amigos</h3>
            <p>Meus amigos são pessoas incríveis...</p>
        </div>
    `,
    sonhos: `
        <div class="text-gray-700">
            <h3 class="text-xl font-semibold text-indigo-600 mb-2 flex items-center"><i class="fas fa-globe-americas mr-2"></i> Meus Sonhos</h3>
            <p>Sempre sonhei em fazer intercâmbio...</p>
        </div>
    `
};

function showDescription(key) {
    const descriptionArea = document.getElementById('description-area');
    if (descriptions[key]) {
        descriptionArea.style.opacity = '0';
        setTimeout(() => {
            descriptionArea.innerHTML = descriptions[key];
            descriptionArea.style.opacity = '1';
        }, 150);
    }
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-indigo-600', 'hover:bg-indigo-50');
        btn.classList.add('text-gray-600');
    });

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
        void activeTab.offsetWidth;
        activeTab.classList.add('active');
    }

    const activeNavButton = document.getElementById('nav-' + tabId);
    if (activeNavButton) {
        activeNavButton.classList.remove('text-gray-600');
        activeNavButton.classList.add('text-indigo-600', 'hover:bg-indigo-50');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = () => {
    showTab('home');
};

