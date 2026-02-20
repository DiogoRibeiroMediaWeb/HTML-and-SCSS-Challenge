export function initNavbar() {
    const appLayout = document.querySelector('.appLayout');
    const navToggle = document.querySelector('.navbar__toggle');
    const backdrop = document.querySelector('.navbar-backdrop');

    if (!appLayout || !navToggle) return;

    navToggle.addEventListener('click', () => {
        appLayout.classList.toggle('appLayout--navbar-open');
    });
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            appLayout.classList.remove('appLayout--navbar-open');
        });
    }
}