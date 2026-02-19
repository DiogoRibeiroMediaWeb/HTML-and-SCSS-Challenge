export function initCalendar() {
  const calendarItems = document.querySelectorAll('.navmenu__calendarItem');

  calendarItems.forEach(item => {
    item.addEventListener('click', () => {
      // 1. Ignorar se o item estiver desativado
      if (item.classList.contains('navmenu__calendarItem--disabled')) return;

      // 2. Remover a classe active de todos os outros
      calendarItems.forEach(el => {
        el.classList.remove('navmenu__calendarItem--active');
        // Se usares o dot dentro, também removemos a classe do dot
        const dot = el.querySelector('.navmenu__calendarDot');
        if (dot) dot.classList.remove('navmenu__calendarDot--active');
      });

      // 3. Adicionar a classe ao item clicado
      item.classList.add('navmenu__calendarItem--active');
      
      // 4. Ativar o dot correspondente
      const activeDot = item.querySelector('.navmenu__calendarDot');
      if (activeDot) activeDot.classList.add('navmenu__calendarDot--active');
    });
  });
}