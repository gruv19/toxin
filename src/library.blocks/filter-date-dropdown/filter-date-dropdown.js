import customDatepicker from "../custom-datepicker/custom-datepicker";
import "./filter-date-dropdown.scss";

function filterDateDropdown(filterDateDropdownSelector) {
  const filterDatepicker = document.querySelector(filterDateDropdownSelector);
  const filterOutputField = filterDatepicker.querySelector(
    ".filter-date-dropdown__field"
  );
  const filterInputElement = filterDatepicker.querySelector(
    ".filter-date-dropdown__input"
  );
  const filterDatepickerOptions = {
    classes: "filter-date-dropdown__datepicker",
    container: "filter-date-dropdown__group",
    dateFormat: "dd MMM",
    locale: {
      monthsShort: [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ],
    },
    onSelect({ date: date, datepicker: datepicker }) {
      const rangeFrom = datepicker.$content.querySelector(".-range-from-");
      const rangeTo = datepicker.$content.querySelector(".-range-to-");
      if (!rangeTo && rangeFrom) {
        rangeFrom.classList.add("-range-to-");
      }
      filterOutputField.textContent = date[0]
        ? filterInputElement.value
        : "Выберите даты";
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
  customDatepicker(
    filterDateDropdownSelector + " .filter-date-dropdown__input",
    filterDatepickerOptions
  );
}

export default filterDateDropdown;
