export function initNavbar() {
  const layout = document.querySelector('.appLayout');
  const navbar = document.querySelector('.navbar');
  const toggleBtn = document.querySelector('.navbar__toggle');
  
  // Criamos o backdrop via JS ou selecionamos se já o puseste no HTML
  let backdrop = document.querySelector('.navbar-backdrop');

  if (toggleBtn && navbar && layout) {
    toggleBtn.addEventListener('click', () => {
      // 1. Expande a largura da Navbar
      navbar.classList.toggle('navbar--expanded');
      
      // 2. Ativa o fundo cinzento e bloqueia o resto da página
      layout.classList.toggle('appLayout--navbar-open');
    });

    // Se o utilizador clicar no cinzento, fechamos tudo
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        navbar.classList.remove('navbar--expanded');
        layout.classList.remove('appLayout--navbar-open');
      });
    }
  }
}