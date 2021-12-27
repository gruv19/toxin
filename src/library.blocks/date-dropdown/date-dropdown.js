import customDatepicker from "../custom-datepicker/custom-datepicker";
import "../label/label.js";
import "./date-dropdown.scss";

function dateDropdown(dateDropdownSelector, selectedDates = false) {
  const dateDropdown = document.querySelector(dateDropdownSelector);
  const outputFieldFrom = dateDropdown.querySelector(
    ".date-dropdown__field--from"
  );
  const outputFieldto = dateDropdown.querySelector(".date-dropdown__field--to");

  const applyButton = {
    content: "Применить",
    onClick: (dp) => {
      dp.hide();
      dp.$datepicker.dispatchEvent(
        new CustomEvent("changeDate", {
          bubbles: true,
          cancelable: true,
          detail: {
            dateFrom: dp.selectedDates[0],
            dateTo: dp.selectedDates[1],
          },
        })
      );
    },
  };

  const datepickerOptions = {
    buttons: ["clear", applyButton],
    classes: "date-dropdown__datepicker",
    container: "date-dropdown__group",
    dateFormat: "dd.MM.yyyy",
    onSelect({ date, formattedDate, datepicker }) {
      const rangeFrom = datepicker.$content.querySelector(".-range-from-");
      const rangeTo = datepicker.$content.querySelector(".-range-to-");
      if (!rangeTo && rangeFrom) {
        rangeFrom.classList.add("-range-to-");
      }
      outputFieldFrom.textContent = date[0] ? formattedDate[0] : "ДД.ММ.ГГГГ";
      outputFieldto.textContent = date[1] ? formattedDate[1] : "ДД.ММ.ГГГГ";
      if (formattedDate.length === 2) {
        datepicker.$datepicker.dispatchEvent(
          new CustomEvent("changeDate", {
            bubbles: true,
            cancelable: true,
            detail: {
              dateFrom: datepicker.selectedDates[0],
              dateTo: datepicker.selectedDates[1],
            },
          })
        );
      }
    },
    onShow(isFinished) {
      outputFieldFrom.classList.add("date-dropdown__field--active");
      outputFieldto.classList.add("date-dropdown__field--active");
      if (isFinished) {
        return;
      }
    },
    onHide(isFinished) {
      outputFieldFrom.classList.remove("date-dropdown__field--active");
      outputFieldto.classList.remove("date-dropdown__field--active");
      if (isFinished) {
        return;
      }
    },
  };

  const datepicker = customDatepicker(
    dateDropdownSelector + " .date-dropdown__input",
    datepickerOptions
  );

  if (selectedDates) {
    datepicker.selectDate(selectedDates);
  }
  return datepicker;
}

export default dateDropdown;
