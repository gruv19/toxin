import "../account/account.js";
import "../../library.blocks/main-menu-state/main-menu-state.js";
import customMenu from "../../library.blocks/custom-menu/custom-menu.js";

import "./nav.scss";

function nav(navSelector) {
  const nav = document.querySelector(navSelector);
  const submenuLinks = nav.querySelectorAll(".nav__link--submenu");
  customMenu(".nav__list");
  submenuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("here");
    });
  });
}

export default nav;
