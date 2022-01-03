import "air-datepicker/air-datepicker.css";
import AirDatepicker from "air-datepicker";
import "./custom-datepicker.scss";

function customDatepicker(inputSelector, options) {

  const airDatepickerOptions = {
    minDate: new Date(),
    moveToOtherMonthsOnSelect: false,
    multipleDates: true,
    range: true,
    multipleDatesSeparator: " - ",
    keyboardNav: true,
    navTitles: {
      days: "MMMM yyyy",
    },
    prevHtml: "<span class='back'></span>",
    nextHtml: "<span class='forward'></span>",
    position: "bottom left",
    offset: 40,
  };

  if (options.buttons) {
    airDatepickerOptions.buttons = options.buttons;
  }
  if (options.classes) {
    airDatepickerOptions.classes = options.classes;
  }
  if (options.container) {
    airDatepickerOptions.container = options.container;
  }
  if (options.dateFormat) {
    airDatepickerOptions.dateFormat = options.dateFormat;
  }
  if (options.locale) {
    airDatepickerOptions.locale = options.locale;
  }
  if (options.inline) {
    airDatepickerOptions.inline = options.inline;
  }
  if (options.onSelect) {
    airDatepickerOptions.onSelect = options.onSelect;
  }
  if (options.onShow) {
    airDatepickerOptions.onShow = options.onShow;
  }
  if (options.onHide) {
    airDatepickerOptions.onHide = options.onHide;
  }

  return new AirDatepicker(inputSelector, airDatepickerOptions);
}

export default customDatepicker;