import "../../library.blocks/textfield/textfield.js";
import "../../library.blocks/radio-button/radio-button.js";
import "../../library.blocks/label/label.js";
import maskedTextfield from "../../library.blocks/masked-textfield/masked-textfield.js";
import "../../library.blocks/toggle/toggle.js";
import "../../library.blocks/button/button.js";

import "./registration-card.scss";

function registrationCard() {
  maskedTextfield();

  const registrationForm = document.querySelector(".registration-card__form");
  const loginBtn = document.querySelector(".registration-card__button-login");
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (let key of data.keys()) {
      console.log(`${key}: ${data.get(key)}`);
    }
  });
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Тут должно быть модальное окно для входа!:)");
  })
}

export default registrationCard;