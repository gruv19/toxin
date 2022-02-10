import '../account/account';

import '../../library.blocks/main-menu-state/main-menu-state';
import customMenu from '../../library.blocks/custom-menu/custom-menu';

import './nav.scss';

function nav(navSelector = '.js-nav') {
  const navEl = document.querySelector(navSelector);
  const submenuLinks = navEl.querySelectorAll('.nav__link--submenu');
  customMenu('.nav__list');
  submenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}

export default nav;
