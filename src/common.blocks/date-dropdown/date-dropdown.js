import customDatepicker from "../custom-datepicker/custom-datepicker";
import "./date-dropdown.scss";

function dateDropdown(dateDropdownSelector) {
  const dateDropdown = document.querySelector(dateDropdownSelector);
  const outputFieldFrom = dateDropdown.querySelector(".date-dropdown__field--from");
  const outputFieldto = dateDropdown.querySelector(".date-dropdown__field--to");

  const applyButton = {
    content: "Применить",
    onClick: (dp) => {
      dp.hide();
    },
  };

  const datepickerOptions = {
    buttons: ["clear", applyButton],
    classes: "date-dropdown__datepicker",
    container: "date-dropdown__group",
    dateFormat: "dd.M.yyyy",
    onSelect({ date, formattedDate, datepicker }) {
      const rangeFrom = datepicker.$content.querySelector(".-range-from-");
      const rangeTo = datepicker.$content.querySelector(".-range-to-");
      if (!rangeTo && rangeFrom) {
        rangeFrom.classList.add("-range-to-");
      }
      outputFieldFrom.textContent = date[0] ? formattedDate[0] : "ДД.ММ.ГГГГ";
      outputFieldto.textContent = date[1] ? formattedDate[1] : "ДД.ММ.ГГГГ";
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

  customDatepicker(
    dateDropdownSelector + " .date-dropdown__input",
    datepickerOptions
  );
}

export default dateDropdown;
