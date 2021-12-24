import "./common.blocks/page/page.js";
import "./common.blocks/main/main.scss";

import "./common.blocks/uikit-header/uikit-header.js";
import searchCard from "./common.blocks/search-card/search-card.js";
import registrationCard from "./common.blocks/registration-card/registration-card.js";
import loginCard from "./common.blocks/login-card/login-card.js";
import "./templates/cards/cards.scss";

$(window).on("load", () => {
  searchCard();
  registrationCard();
  loginCard();
});