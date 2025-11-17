const defaultConfig = {
  nome_completo: "Nicolly Domingues",
  sobre_mim: "Meu nome é Nicolly e sou uma pessoa cheia de sonhos e vontade de evoluir. Gosto de aprender, criar e buscar sempre o melhor para mim e para quem está ao meu redor. Valorizo minha família, meus amigos e tudo o que me faz crescer. Estou sempre construindo meu futuro com determinação e fé.",
  familia_texto: "Eu moro com a minha mãe e com o meu irmão, que são minha base e o meu maior apoio. A gente passa por muita coisa juntos, e é essa união que me ajuda a continuar crescendo cada vez mais.",
  hobbies_texto: "Eu gosto de ler livros principalmente de fantasia. Recentemente comecei a criar coisas com limpador de cachimbo virou uma forma divertida de soltar a criatividade. Também estou voltando a desenhar, um hobby que sempre me trouxe calma e me ajudou a me expressar.",
  amigos_texto: "Meus amigos são pessoas incríveis. Cada um deles me inspira de um jeito diferente, e sou muito grata por ter por perto pessoas que me apoiam, me fazem rir e tornam os meus dias melhores.",
  sonhos_texto: "Sempre sonhei em fazer intercâmbio e viajar pelo mundo. Quero conhecer novas culturas, aprender idiomas e viver experiências que me ajudem a crescer como pessoa.",
  contato_titulo: "Entre em contato comigo"
};

async function onConfigChange(config) {
  document.getElementById('nome-hero').textContent = config.nome_completo || defaultConfig.nome_completo;
  document.getElementById('sobre-texto').textContent = config.sobre_mim || defaultConfig.sobre_mim;
  document.getElementById('familia-desc').textContent = config.familia_texto || defaultConfig.familia_texto;
  document.getElementById('hobbies-desc').textContent = config.hobbies_texto || defaultConfig.hobbies_texto;
  document.getElementById('amigos-desc').textContent = config.amigos_texto || defaultConfig.amigos_texto;
  document.getElementById('sonhos-desc').textContent = config.sonhos_texto || defaultConfig.sonhos_texto;
  document.getElementById('contato-titulo-texto').textContent = config.contato_titulo || defaultConfig.contato_titulo;
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["nome_completo", config.nome_completo || defaultConfig.nome_completo],
    ["sobre_mim", config.sobre_mim || defaultConfig.sobre_mim],
    ["familia_texto", config.familia_texto || defaultConfig.familia_texto],
    ["hobbies_texto", config.hobbies_texto || defaultConfig.hobbies_texto],
    ["amigos_texto", config.amigos_texto || defaultConfig.amigos_texto],
    ["sonhos_texto", config.sonhos_texto || defaultConfig.sonhos_texto],
    ["contato_titulo", config.contato_titulo || defaultConfig.contato_titulo]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

function showPage(pageName) {
  const pages = document.querySelectorAll('.page');
  const navBtns = document.querySelectorAll('.nav-btn');
  
  pages.forEach(page => page.classList.remove('active'));
  navBtns.forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(pageName).classList.add('active');
  event.target.classList.add('active');
}

function toggleBlock(block) {
  const wasExpanded = block.classList.contains('expanded');
  document.querySelectorAll('.block').forEach(b => b.classList.remove('expanded'));
  if (!wasExpanded) block.classList.add('expanded');
}
