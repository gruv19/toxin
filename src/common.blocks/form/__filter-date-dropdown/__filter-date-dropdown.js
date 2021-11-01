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
  // monthsField: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
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
    // const rangeFrom = datepicker.$content.querySelector(".-range-from-");
    // const rangeTo = datepicker.$content.querySelector(".-range-to-");
    // if(!rangeTo) {
    //   rangeFrom.classList.add("-range-to-");
    // }
    // if (date[1]) {
    //   $(".form__date-dropdown--to").text(
    //     new Intl.DateTimeFormat("ru").format(date[1])
    //   );
    // }
  },
});