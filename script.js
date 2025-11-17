const blockData = {
  "Familia": document.getElementById('familia-desc').textContent,
  "Hobbies": document.getElementById('hobbies-desc').textContent,
  "Amigos": document.getElementById('amigos-desc').textContent,
  "Sonhos": document.getElementById('sonhos-desc').textContent
};

function showPage(pageName) {
  const pages = document.querySelectorAll('.page');
  const navBtns = document.querySelectorAll('.nav-btn');

  pages.forEach(page => page.classList.remove('active'));
  navBtns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(pageName).classList.add('active');
  event.target.classList.add('active');
}

function toggleBlock(block) {
  const title = block.querySelector('h3').textContent;
  openModal(title);
}

function openModal(title) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <h3>${title}</h3>
      <p>${blockData[title]}</p>
    </div>
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  modal.querySelector('.modal-close').onclick = () => {
    document.body.removeChild(modal);
  };
}
