import "./__filter-date-dropdown.scss";
import "air-datepicker/air-datepicker.css";
import AirDatepicker from "air-datepicker";

new AirDatepicker(".form__filter-date-dropdown-input", {
  minDate: new Date(),
  moveToOtherMonthsOnSelect: false,
  multipleDates: true,
  range: true,
  multipleDatesSeparator: " - ",
  keyboardNav: true,
  classes: "form__filter-date-dropdown-datepicker",
  navTitles: {
    days: "MMMM yyyy",
  },
  prevHtml: "<span class='back'></span>",
  nextHtml: "<span class='forward'></span>",
  container: ".form__filter-date-dropdown-label",
  position: "bottom left",
  dateFormat: "dd MMM",
  locale: {
    monthsShort: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
  },
  offset: 40,
  onSelect({ date, formattedDate, datepicker }) {
    $(".form__filter-date-dropdown").text("Выберите даты");
    if (date[0]) {
      let text = $(".form__filter-date-dropdown-input").val();
      $(".form__filter-date-dropdown").text(text);
    }
  },
  onShow() {
    document.querySelectorAll(".form__filter-date-dropdown-block .form__down-arrow").forEach(arrow => {
      arrow.classList.add("form__down-arrow--active");
    });
  },
  onHide() {
    document.querySelectorAll(".form__filter-date-dropdown-block .form__down-arrow").forEach(arrow => {
      arrow.classList.remove("form__down-arrow--active");
    });
  },
});