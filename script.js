const blockContents = [
    {
        title: "Família",
        icon: "home",
        color: "bg-blue-100 border-blue-400 text-blue-800",
        description: "Eu moro com a minha mãe e com o meu irmão..."
    },
    {
        title: "Hobbies",
        icon: "book-open",
        color: "bg-green-100 border-green-400 text-green-800",
        description: "Eu gosto de ler livros principalmente de fantasia..."
    },
    {
        title: "Amigos",
        icon: "users",
        color: "bg-yellow-100 border-yellow-400 text-yellow-800",
        description: "Meus amigos são pessoas incríveis..."
    },
    {
        title: "Sonhos",
        icon: "globe",
        color: "bg-purple-100 border-purple-400 text-purple-800",
        description: "Sempre sonhei em fazer intercâmbio..."
    }
];

let activeBlock = null;

function renderInteractiveBlocks() {
    const container = document.getElementById('interactive-blocks');
    container.innerHTML = blockContents.map((content, index) => `
        <div 
            id="block-${index}" 
            class="block-card p-6 rounded-xl border-2 ${content.color} icon-block"
            onclick="toggleDescription(${index}, '${content.title}')"
        >
            <i data-lucide="${content.icon}" class="w-8 h-8 mb-2"></i>
            <h3 class="text-xl font-bold">${content.title}</h3>
        </div>
    `).join('');

    lucide.createIcons();
}

function toggleDescription(index, title) {
    const descriptionArea = document.getElementById('description-area');
    const newContent = blockContents[index];
    const currentBlockElement = document.getElementById(`block-${index}`);

    if (activeBlock === index) {
        descriptionArea.innerHTML = '';
        currentBlockElement.classList.remove('ring-4', 'ring-offset-2', 'ring-indigo-400', 'shadow-2xl');
        activeBlock = null;
        return;
    }

    if (activeBlock !== null) {
        document.getElementById(`block-${activeBlock}`)?.classList.remove('ring-4', 'ring-offset-2', 'ring-indigo-400', 'shadow-2xl');
    }

    descriptionArea.innerHTML = `
        <div class="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-indigo-600">
            <h3 class="text-2xl font-bold primary-color-text mb-4">${title}</h3>
            <p class="text-gray-700">${newContent.description}</p>
        </div>
    `;

    currentBlockElement.classList.add('ring-4', 'ring-offset-2', 'ring-indigo-400', 'shadow-2xl');
    activeBlock = index;
}

function changeView(viewName) {
    const views = ['home', 'perfil'];
    views.forEach(view => {
        const element = document.getElementById(`${view}-view`);
        const navButton = document.getElementById(`nav-${view}`);

        if (view === viewName) {
            element.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            element.classList.add('hidden');
        }
    });
}

window.onload = function() {
    renderInteractiveBlocks();
    changeView('home');
};


