import "./common.blocks/page/page.js";
import "./common.blocks/main/main.scss";

import "./common.blocks/uikit-header/uikit-header.js";
import searchCard from "./common.blocks/search-card/search-card.js";
import registrationCard from "./common.blocks/registration-card/registration-card.js";
import loginCard from "./common.blocks/login-card/login-card.js";
import bookingCard from "./common.blocks/booking-card/booking-card.js";
import roomCard from "./common.blocks/room-card/room-card.js";
import customDatepicker from "./library.blocks/custom-datepicker/custom-datepicker.js";
import "./templates/cards/cards.scss";

$(window).on("load", () => {
  searchCard();
  registrationCard();
  loginCard();
  bookingCard(
    { number: 888, category: "ЛЮКС", cost: 9990, service: 0, additional: 300 },
    2179
  );
  roomCard();
  customDatepicker(".cards__input", {
    inline: true,
    buttons: [
      "clear",
      {
        content: "Применить",
      },
    ],
  });
});
