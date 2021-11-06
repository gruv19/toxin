import customDatepicker from "../custom-datepicker/custom-datepicker";
import "./filter-date-dropdown.scss";

function filterDateDropdown(filterDatepickerSelector) {
  const filterDatepicker = document.querySelector(filterDatepickerSelector);
  const filterOutputField = filterDatepicker.querySelector(".filter-date-dropdown__field");
  const filterInputElement = filterDatepicker.querySelector(".filter-date-dropdown__input");
  const filterDatepickerOptions = {
    classes: "filter-date-dropdown__datepicker",
    container: "filter-date-dropdown__group",
    dateFormat: "dd MMM",
    locale: {
      monthsShort: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    },
    onSelect({ date, formattedDate, datepicker }) {
      filterOutputField.textContent = date[0] ? filterInputElement.value : "Выберите даты";
    },
    onShow(isFinished) {
      filterOutputField.classList.add("filter-date-dropdown__field--active");
      if (isFinished) {
        return;
      }
    },
    onHide(isFinished) {
      filterOutputField.classList.remove("filter-date-dropdown__field--active");
      if (isFinished) {
        return;
      }
    },
  };
  customDatepicker(filterDatepickerSelector + " .filter-date-dropdown__input", filterDatepickerOptions);
}

export default filterDateDropdown;

