// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.addEventListener('click', documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
  menuBlocks.forEach((menuBlocks) => {
    const menuBlocksItems = menuBlocks.querySelectorAll('.sub-menu-catalog__category').length;
    menuBlocks.classList.add(`sub-menu-catalog__block_${menuBlocksItems}`);
  });
}

function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest('[data-parent]')) {
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector('.catalog-header');
    if (subMenu) {
      const activeLink = document.querySelector('._sub-menu-active');
      const activeBlock = document.querySelector('._sub-menu-open');

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove('_sub-menu-active');
        activeBlock.classList.remove('_sub-menu-open');
      }
      targetElement.classList.toggle('_sub-menu-active');
      subMenu.classList.toggle('_sub-menu-open');
    } else {
      console.log('Такого нет');
    }
    e.preventDefault();
  }

  if (targetElement.closest('.menu-top-header__link--catalog')) {
    // const catalogLink = targetElement.closest('.menu-top-header__link--catalog');
    document.documentElement.classList.add('catalog-open');
    e.preventDefault();
  }
}
