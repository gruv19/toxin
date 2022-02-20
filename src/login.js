import 'normalize.css';
import './layouts/layout/layout';

import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';
import overlayGlide from './library.blocks/overlay-glide/overlay-glide';
import loginCard from './common.blocks/login-card/login-card';

import './templates/login/login.scss';

$(window).on('load', () => {
  header('.header');
  overlayGlide();
  footer();
  loginCard();
});
