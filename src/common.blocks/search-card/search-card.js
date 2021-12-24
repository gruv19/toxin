import dateDropdown from "../../library.blocks/date-dropdown/date-dropdown.js";
import dropdown from "../../library.blocks/dropdown/dropdown.js";
import "../../library.blocks/label/label.js";
import "../../library.blocks/button/button.js";

import "./search-card.scss";

$(window).on("load", () => {
  const datepicker = dateDropdown(".search-card__date-dropdown");
  dropdown(".search-card__dropdown", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);

  const searchForm = document.querySelector(".search-card__form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("date-from", datepicker.selectedDates[0]);
    data.append("date-to", datepicker.selectedDates[1]);
    for (let key of data.keys()) {
      console.log(`${key}: ${data.get(key)}`);
    }
  });
});