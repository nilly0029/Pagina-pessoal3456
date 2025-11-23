// Conteúdo das descrições com escrita estética
const texts = {
  familia: "Minha família é meu porto: amor que sustenta e aconchega. Crescemos juntos, rimos, choramos e aprendemos — e é esse laço que me dá força.",
  hobbies: "Desenhar, ler fantasia e criar com as mãos são pequenos rituais que acalmam, inspiram e transformam ideias em cor e forma.",
  amigos: "Amigos são constelações na minha vida: cada presença ilumina e faz o caminho mais leve. Sou imensamente grata por eles.",
  sonhos: "Sonhar é traçar mapas — quero intercâmbio, viagens que transformem, novas línguas e memórias que ampliem meus horizontes."
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



