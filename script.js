// VARIÁVEIS E CONSTANTES
let currentPage = 'home';
const contentContainer = document.getElementById('content-container');
const navLinks = document.querySelectorAll('.nav-link');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// TOPICS
const topicDetails = {
    sonhos: {
        title: "Meus Sonhos e Aspirações",
        icon: "star",
        color: "blue",
        shortName: "Sonhos",
        description: "Sempre sonhei em fazer intercâmbio...",
        details: "Sempre sonhei em fazer intercâmbio..."
    },
    amigos: {
        title: "A Importância dos Meus Amigos",
        icon: "users",
        color: "green",
        shortName: "Amigos",
        description: "Meus amigos são pessoas incríveis...",
        details: "Meus amigos são pessoas incríveis..."
    },
    familia: {
        title: "Minha Família é o Meu Alicerce",
        icon: "home",
        color: "red",
        shortName: "Família",
        description: "Eu moro com a minha mãe...",
        details: "Eu moro com a minha mãe..."
    },
    hobbies: {
        title: "O Que Gosto de Fazer (Hobbies)",
        icon: "gamepad",
        color: "purple",
        shortName: "Hobbies",
        description: "Eu gosto de ler livros...",
        details: "Eu gosto de ler livros..."
    }
};

// CARROSSEL
const carouselItems = [
    { id: 1, title: "Foco nos Estudos", image: "https://placehold.co/1200x500/e9d5ff/6b21a8?text=FOTO+1", caption: "Dedicação total." },
    { id: 2, title: "Boas Risadas", image: "https://placehold.co/1200x500/a7f3d0/065f46?text=FOTO+2", caption: "Momentos felizes." },
    { id: 3, title: "Meu Alicerce", image: "https://placehold.co/1200x500/fee2e2/991b1b?text=FOTO+3", caption: "Amor e apoio." },
    { id: 4, title: "Explorando Interesses", image: "https://placehold.co/1200x500/bfdbfe/1d4ed8?text=FOTO+4", caption: "Minhas atividades favoritas." },
    { id: 5, title: "Dia de Sol", image: "https://placehold.co/1200x500/fecaca/991b1b?text=FOTO+5", caption: "Aproveitando a natureza." },
    { id: 6, title: "Nova Conquista", image: "https://placehold.co/1200x500/d9f99d/3f6212?text=FOTO+6", caption: "Vitória alcançada." },
    { id: 7, title: "Leitura Relaxante", image: "https://placehold.co/1200x500/dbeafe/1e40af?text=FOTO+7", caption: " boas leituras." },
    { id: 8, title: "Criatividade em Ação", image: "https://placehold.co/1200x500/fef08a/a16207?text=FOTO+8", caption: "Criando algo novo." }
];

// CORES DOS CARDS
const colorMap = {
    blue: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-800', textIcon: 'text-blue-600', bgHover: 'bg-blue-50', borderDetail: 'border-blue-500' },
    green: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-800', textIcon: 'text-green-600', bgHover: 'bg-green-50', borderDetail: 'border-green-500' },
    red: { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-800', textIcon: 'text-red-600', bgHover: 'bg-red-50', borderDetail: 'border-red-500' },
    purple: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-800', textIcon: 'text-purple-600', bgHover: 'bg-purple-50', borderDetail: 'border-purple-500' }
};

function createTopicCard(key, data) {
    const colors = colorMap[data.color] || colorMap.blue;
    const displayTitle = data.shortName || data.title.split(' ')[0];
    return `
        <div id="card-${key}" class="topic-card bg-indigo-50 rounded-xl shadow-lg border border-gray-100 cursor-pointer hover:scale-[1.03] transition" data-topic="${key}">
            <div class="${colors.bg} rounded-t-xl p-3 flex items-center justify-between border-b-2 ${colors.border}">
                <h3 class="text-lg font-bold ${colors.text}">${displayTitle}</h3>
                <i data-lucide="${data.icon}" class="w-6 h-6 ${colors.textIcon}"></i>
            </div>
            <div class="p-4 h-24 flex items-start">
                <p class="text-sm text-gray-700 line-clamp-3">${data.description}</p>
            </div>
            <div class="p-2 text-center text-xs font-semibold ${colors.textIcon} bg-gray-100 rounded-b-xl">
                Clique para ver mais!
            </div>
        </div>
    `;
}

const topicCardsHtml = Object.keys(topicDetails).map(key => createTopicCard(key, topicDetails[key])).join('');

// 🔥 O RESTANTE DO SEU SCRIPT (pages, eventos, modal, carrossel, navegação, etc)
// Mantive exatamente igual — posso colar tudo se você quiser **completo** também.
