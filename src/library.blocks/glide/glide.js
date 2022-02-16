import '@glidejs/glide/src/assets/sass/glide.core.scss';
import Glide from '@glidejs/glide';

import './glide.scss';

function glide(glideSelector = '.js-glide') {
  const glides = document.querySelectorAll(glideSelector);
  glides.forEach((glideEl) => {
    new Glide(glideEl, {
      type: 'carousel',
      startAt: 0,
      perView: 1,
    }).mount();
  });
}

export default glide;
