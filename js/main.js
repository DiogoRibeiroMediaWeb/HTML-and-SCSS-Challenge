// main.js
import { initNavMenu } from './modules/navmenu/toggle.js';
import { initNavbar } from './modules/navbar/toggle.js';
import { initCalendar } from './modules/navmenu/calendar.js';

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initNavMenu();
  initNavbar();
  initCalendar();
});