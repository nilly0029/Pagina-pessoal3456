// textos das descrições (mais aesthetic)
const texts = {
  familia: "Minha família é meu porto: amor que sustenta e aconchega. Crescemos juntos, rimos e aprendemos — e é esse elo que me dá força.",
  hobbies: "Desenhar, ler fantasia e criar com as mãos: pequenos rituais que acalmam, inspiram e me ajudam a traduzir emoções em cor e forma.",
  amigos: "Amigos são constelações: cada sorriso, conselho e lembrança ilumina o caminho. Sou grata por cada presença que torna os dias mais leves.",
  sonhos: "Sonhar é mapa e norte — quero intercâmbio, viagens que transformam, novas línguas e memórias que alargam os horizontes."
};

// navegação entre Home / Perfil
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const target = btn.getAttribute('data-target');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// também para CTA ou botões que usem data-target
document.querySelectorAll('[data-target]').forEach(el=>{
  el.addEventListener('click', (e)=>{
    const t = el.getAttribute('data-target');
    if (!t) return;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(t).classList.add('active');
    // atualizar nav active
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    document.querySelector(`.nav-btn[data-target="${t}"]`)?.classList.add('active');
  });
});

// abrir modal com conteúdo
function openModal(key){
  const title = key.charAt(0).toUpperCase() + key.slice(1);
  const body = texts[key] || "";

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = body;

  document.getElementById('modal-bg').style.display = "block";
  document.getElementById('modal').style.display = "block";

  // foco no botão fechar por acessibilidade
  setTimeout(()=> document.querySelector('.modal-close')?.focus(), 150);
}

// fechar modal
function closeModal(){
  document.getElementById('modal-bg').style.display = "none";
  document.getElementById('modal').style.display = "none";
}

// fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e){
  if(e.key === "Escape"){
    closeModal();
  }
});


