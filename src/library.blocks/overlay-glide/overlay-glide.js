import '@glidejs/glide/src/assets/sass/glide.core.scss';
import Glide from '@glidejs/glide';

import './overlay-glide.scss';

function overlayGlide() {
  new Glide('.js-overlay-glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  }).mount();
}

export default overlayGlide;
