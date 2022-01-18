import rateButton from "../../library.blocks/rate-button/rate-button.js";
import glide from "../../library.blocks/glide/glide.js"
import "./room-card.scss";

function roomCard(glideSelector = "") {
  rateButton(true);
  glide(".room-card__slider");
  console.log("roomCard work!");
}

export default roomCard;
