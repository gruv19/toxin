import "./__date-dropdown.scss";
import "air-datepicker/air-datepicker.css";
import AirDatepicker from "air-datepicker";

const applyButton = {
  content: "Применить",
  onClick: (dp) => {
    dp.hide();
  },
};
new AirDatepicker(".form__date-dropdown-input", {
  minDate: new Date(),
  moveToOtherMonthsOnSelect: false,
  multipleDates: true,
  range: true,
  multipleDatesSeparator: " - ",
  keyboardNav: true,
  buttons: ["clear", applyButton],
  classes: "form__date-dropdown-datepicker",
  navTitles: {
    days: "MMMM yyyy",
  },
  prevHtml: "<span class='back'></span>",
  nextHtml: "<span class='forward'></span>",
  container: ".form__date-dropdown-label",
  position: "bottom left",
  onSelect({ date, formattedDate, datepicker }) {
    $(".form__date-dropdown--from").text("ДД.ММ.ГГГГ");
    $(".form__date-dropdown--to").text("ДД.ММ.ГГГГ");
    if (date[0]) {
      $(".form__date-dropdown--from").text(
        new Intl.DateTimeFormat("ru").format(date[0])
      );
    }
    const rangeFrom = datepicker.$content.querySelector(".-range-from-");
    const rangeTo = datepicker.$content.querySelector(".-range-to-");
    if(!rangeTo) {
      rangeFrom.classList.add("-range-to-");
    }
    if (date[1]) {
      $(".form__date-dropdown--to").text(
        new Intl.DateTimeFormat("ru").format(date[1])
      );
    }
  },
});
