import 'normalize.css';
import './common.blocks/page/page';

import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';
import overlayGlide from './library.blocks/overlay-glide/overlay-glide';
import registrationCard from './common.blocks/registration-card/registration-card';

import './templates/register/register.scss';

$(window).on('load', () => {
  header('.header');
  footer();
  overlayGlide();
  registrationCard();
});
