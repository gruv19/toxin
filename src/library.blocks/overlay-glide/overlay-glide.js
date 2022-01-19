import "../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import  "./overlay-glide.scss";

function overlayGlide(glideSelector = ".overlay-glide") {
  new Glide(glideSelector, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 3000,
  }).mount();
}

export default overlayGlide;
