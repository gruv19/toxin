import 'normalize.css';
import './common.blocks/page/page';

import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';
import searchCard from './common.blocks/search-card/search-card';
import overlayGlide from './library.blocks/overlay-glide/overlay-glide';

import './templates/landing-page/landing-page.scss';

$(window).on('load', () => {
  header('.header');
  searchCard();
  overlayGlide();
  footer();
});
