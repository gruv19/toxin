import "normalize.css";
import "./common.blocks/page/page.js";

import header from "./common.blocks/header/header.js";
import footer from "./common.blocks/footer/footer.js";
import searchCard from "./common.blocks/search-card/search-card.js";
import overlayGlide from "./library.blocks/overlay-glide/overlay-glide.js";

import "./templates/landing-page/landing-page.scss";

$(window).on("load", () => {
  header(".header");
  searchCard();
  overlayGlide();
  footer();
  console.log("all works");
});
