import "./common.blocks/global/_fonts.scss";
import "./common.blocks/global/_global.scss";
import "./common.blocks/main/main.scss";

import "./common.blocks/header/header.js";
import "./common.blocks/form/form.js";
import "./common.blocks/bullet-list/bullet-list.js";
import "./common.blocks/info-card/info-card.js";
import "./common.blocks/review/review.js";

import "./common.blocks/button/button.js";
import "./common.blocks/checkbox-button/checkbox-button.js";
import checkboxList from "./common.blocks/expandable-checkbox-list/expandable-checkbox-list.js";
import "./common.blocks/toggle/toggle.js";
import "./common.blocks/radio-button/radio-button.js";
import "./common.blocks/textfield/textfield.js";
import filterDateDropdown from "./common.blocks/filter-date-dropdown/filter-date-dropdown.js";
import dateDropdown from "./common.blocks/date-dropdown/date-dropdown.js";

$(window).on("load", () => {
  checkboxList();
  filterDateDropdown(".test-date");
  dateDropdown(".test-date-dropdown")
});
