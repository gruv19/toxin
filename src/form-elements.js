// import "./common.blocks/global/_fonts.scss";
// import "./common.blocks/global/_global.scss";
import "./common.blocks/page/page.js";
import "./common.blocks/main/main.scss";
import "./common.blocks/uikit-header/uikit-header.js";

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
  filterDateDropdown(".test-date");
  dateDropdown(".test-date-dropdown");
  likeButtons();
  rateButton();
  maskedTextfield();
  pagination(
    ".paginate-container",
    ".data-container",
    Array(40).fill(""),
    paginateTestTemplate
  );
  rangeSlider(".ui-range-slider");
  subscribe();
  dropdown(".uikit-dropdown", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".uikit-dropdown-room", [
    { one: "спальня", twoToFour: "спальни", moreThanFive: "спален" },
    { one: "кровать", twoToFour: "кровати", moreThanFive: "кроватей" },
    { one: "ванная комната", twoToFour: "ванные комнаты", moreThanFive: "ванных комнат" },
  ]);
  dropdown(".uikit-dropdown-1", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".uikit-dropdown-2", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);
  dropdown(".uikit-dropdown-room-expanded", [
    { one: "спальня", twoToFour: "спальни", moreThanFive: "спален" },
    { one: "кровать", twoToFour: "кровати", moreThanFive: "кроватей" },
    { one: "ванная комната", twoToFour: "ванные комнаты", moreThanFive: "ванных комнат" },
  ]);
});
