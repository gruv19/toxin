import 'normalize.css';
import './layouts/layout/layout';

import './common.blocks/uikit-header/uikit-header';

import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';

import './templates/headers-and-footers/headers-and-footers.scss';

$(window).on('load', () => {
  header('.header__menu');
  footer();
});
