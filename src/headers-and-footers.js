import "normalize.css";
import "./common.blocks/page/page.js";

import "./common.blocks/uikit-header/uikit-header.js";

import header from "./common.blocks/header/header.js";
import footer from "./common.blocks/footer/footer.js";

import "./templates/headers-and-footers/headers-and-footers.scss";

$(window).on("load", () => {
  header(".header__menu");
  footer();
});
