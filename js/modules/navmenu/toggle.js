export function initNavMenu() {
  const layout = document.querySelector('.appLayout');
  const toggleBtn = document.querySelector('.navmenu__toggle');

  if (layout && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      layout.classList.toggle('appLayout--menu-closed');
    });
  }
}