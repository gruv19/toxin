import "normalize.css";
import "./common.blocks/page/page.js";

import "./library.blocks/bullet-list/bullet-list.js";
import "./library.blocks/info-card/info-card.js";
import "./library.blocks/review/review.js";
import "./library.blocks/label/label.js";

import "./library.blocks/button/button.js";
import "./library.blocks/checkbox-button/checkbox-button.js";
import checkboxList from "./library.blocks/expandable-checkbox-list/expandable-checkbox-list.js";
import "./library.blocks/toggle/toggle.js";
import "./library.blocks/radio-button/radio-button.js";
import "./library.blocks/textfield/textfield.js";
import filterDateDropdown from "./library.blocks/filter-date-dropdown/filter-date-dropdown.js";
import dateDropdown from "./library.blocks/date-dropdown/date-dropdown.js";
import likeButtons from "./library.blocks/like-button/like-button.js";
import rateButton from "./library.blocks/rate-button/rate-button.js";
import maskedTextfield from "./library.blocks/masked-textfield/masked-textfield.js";
import pagination from "./library.blocks/pagination/pagination.js";
import rangeSlider from "./library.blocks/range-slider/range-slider.js";
import subscribe from "./library.blocks/subscribe-form/subscribe-form.js";
import dropdown from "./library.blocks/dropdown/dropdown.js";

import "./common.blocks/uikit-header/uikit-header.js";
import "./templates/form-elements/form-elements.scss";

$(window).on("load", () => {
  function paginateTestTemplate(data) {
    let html = "<ul>";
    data.forEach((item) => {
      html += `<li>${item}</li>`;
    });
    html += "</ul>";
    return html;
  }

  checkboxList();
  filterDateDropdown(".form-elements__filter-date-dropdown", ["2021-12-20", "2021-12-18"]);
  dateDropdown(".form-elements__date-dropdown", ["2021-12-25", "2021-12-30"]);
  likeButtons();
  rateButton();
  maskedTextfield();
  pagination(
    ".form-elements__data-container ",
    ".form-elements__paginate-container",
    Array(180).fill(""),
    paginateTestTemplate,
    3
  );
  rangeSlider(".form-elements__range-slider");
  subscribe();
  dropdown(".form-elements__dropdown", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".form-elements__dropdown--guest-expanded-empty", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".form-elements__dropdown--guest-expanded-full", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".form-elements__dropdown--room", [
    { one: "спальня", twoToFour: "спальни", moreThanFive: "спален" },
    { one: "кровать", twoToFour: "кровати", moreThanFive: "кроватей" },
    { one: "ванная комната", twoToFour: "ванные комнаты", moreThanFive: "ванных комнат" },
  ]);
  dropdown(".form-elements__dropdown--room-expanded", [
    { one: "спальня", twoToFour: "спальни", moreThanFive: "спален" },
    { one: "кровать", twoToFour: "кровати", moreThanFive: "кроватей" },
    { one: "ванная комната", twoToFour: "ванные комнаты", moreThanFive: "ванных комнат" },
  ]);

  const activeDropdownRoom = document.querySelector(".form-elements__dropdown--room-expanded");
  activeDropdownRoom.firstElementChild.classList.add("dropdown__visually--active");
  activeDropdownRoom.lastElementChild.classList.remove("visually-hidden");
  activeDropdownRoom.lastElementChild.style.position = "relative";

  const emptyDropdownGuests = document.querySelector(".form-elements__dropdown--guest-expanded-empty");
  emptyDropdownGuests.firstElementChild.classList.add("dropdown__visually--active");
  emptyDropdownGuests.lastElementChild.classList.remove("visually-hidden");
  emptyDropdownGuests.lastElementChild.style.position = "relative";

  const fullDropdownGuests = document.querySelector(".form-elements__dropdown--guest-expanded-full");
  fullDropdownGuests.firstElementChild.classList.add("dropdown__visually--active");
  fullDropdownGuests.lastElementChild.classList.remove("visually-hidden");
  fullDropdownGuests.lastElementChild.style.position = "relative";
});
