import "../../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";
import "./glide.scss";

function glide(glideSelector = ".glide") {
  const glides = document.querySelectorAll(glideSelector);
  glides.forEach(glide => {
    new Glide(glide, {
      type: "carousel",
      startAt: 0,
      perView: 1,
    }).mount();
  });
}

export default glide;
