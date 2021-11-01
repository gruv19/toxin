import "./__expandable-checkbox-list.scss";

import "../__checkbox-button/__checkbox-button.js";

const checkboxListLabel = $(".form__expandable-checkbox-list");
const checkboxList = $(".form__expandable-checkbox-buttons");
let flag = false;

checkboxListLabel.on("click", () => {
  if (checkboxListLabel.hasClass("form__expandable-checkbox-list--focus")) {
    checkboxListLabel.removeClass("form__expandable-checkbox-list--focus");
    checkboxListLabel.blur();
  } else if (!checkboxListLabel.hasClass("form__expandable-checkbox-list--focus")) {
    checkboxListLabel.addClass("form__expandable-checkbox-list--focus");
  }
});

checkboxListLabel.on("blur", () => {
  if (checkboxListLabel.hasClass("form__expandable-checkbox-list--focus")) {
    checkboxListLabel.removeClass("form__expandable-checkbox-list--focus");
  }
});

checkboxList.on("click", (e) => {
  e.stopPropagation();
});