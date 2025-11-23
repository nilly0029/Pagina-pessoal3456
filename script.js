// Conteúdo das descrições com escrita estética
const texts = {
  familia: 'Eu moro com a minha mãe e com o meu irmão, que são minha base e o meu maior apoio. A gente passa por muita coisa juntos, e é essa união que me ajuda a continuar crescendo cada vez mais.',
  hobbies: 'Eu gosto de ler livros principalmente de fantasia. Recentemente comecei a criar coisas com limpador de cachimbo virou uma forma divertida de soltar a criatividade. Também estou voltando a desenhar, um hobby que sempre me trouxe calma e me ajudou a me expressar.',
  amigos: 'Meus amigos são pessoas incríveis. Cada um deles me inspira de um jeito diferente, e sou muito grata por ter por perto pessoas que me apoiam, me fazem rir e tornam os meus dias melhores .',
  sonhos: 'Sempre sonhei em fazer intercâmbio e viajar pelo mundo Quero conhecer novas culturas, aprender idiomas e viver experiências que me ajudem a crescer como pessoa.'

};

// Navegação SPA (Home / Perfil)
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // rola para topo da página ativa
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// botões com data-target (CTA, voltar)
document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', (e) => {
    const t = el.getAttribute('data-target');
    if (!t) return;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(t).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.nav-btn[data-target="${t}"]`)?.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Abre modal com conteúdo
function openModal(key) {
  const title = key.charAt(0).toUpperCase() + key.slice(1);
  const body = texts[key] || "";

  const modal = document.getElementById('modal');
  const modalBg = document.getElementById('modal-bg');

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = body;

  modal.style.display = 'block';
  modalBg.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  modalBg.setAttribute('aria-hidden', 'false');

  // foco para a tecla fechar (acessibilidade)
  setTimeout(() => document.querySelector('.modal-close')?.focus(), 120);
}

// Fecha modal
function closeModal() {
  const modal = document.getElementById('modal');
  const modalBg = document.getElementById('modal-bg');

  modal.style.display = 'none';
  modalBg.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalBg.setAttribute('aria-hidden', 'true');
}

// Fecha modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});

// Evita fechar o modal quando clicar dentro do modal (só fecha ao clicar no bg)
document.getElementById('modal').addEventListener('click', (e) => {
  e.stopPropagation();
});



