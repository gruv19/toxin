import customDatepicker from '../custom-datepicker/custom-datepicker';
import '../label/label';
import './date-dropdown.scss';

function dateDropdown(dateDropdownSelector = '.date-dropdown', selectedDates = false) {
  const dateDropdownElement = document.querySelector(dateDropdownSelector);
  const outputFieldFrom = dateDropdownElement.querySelector('.date-dropdown__field--from');
  const outputFieldto = dateDropdownElement.querySelector('.date-dropdown__field--to');

  const applyButton = {
    content: 'Применить',
    onClick: (dp) => {
      dp.hide();
      dp.$datepicker.dispatchEvent(
        new CustomEvent('changeDate', {
          bubbles: true,
          cancelable: true,
          detail: {
            dateFrom: dp.selectedDates[0],
            dateTo: dp.selectedDates[1],
          },
        }),
      );
    },
  };

  const datepickerOptions = {
    buttons: ['clear', applyButton],
    classes: 'date-dropdown__datepicker',
    container: 'date-dropdown__group',
    dateFormat: 'dd.MM.yyyy',
    onSelect({ date, formattedDate, datepicker }) {
      const rangeFrom = datepicker.$content.querySelector('.-range-from-');
      const rangeTo = datepicker.$content.querySelector('.-range-to-');
      if (!rangeTo && rangeFrom) {
        rangeFrom.classList.add('-range-to-');
      }
      outputFieldFrom.textContent = date[0] ? formattedDate[0] : 'ДД.ММ.ГГГГ';
      outputFieldto.textContent = date[1] ? formattedDate[1] : 'ДД.ММ.ГГГГ';
      if (formattedDate.length === 2) {
        datepicker.$datepicker.dispatchEvent(
          new CustomEvent('changeDate', {
            bubbles: true,
            cancelable: true,
            detail: {
              dateFrom: datepicker.selectedDates[0],
              dateTo: datepicker.selectedDates[1],
            },
          }),
        );
      }
    },
    onShow(isFinished) {
      outputFieldFrom.classList.add('date-dropdown__field--active');
      outputFieldto.classList.add('date-dropdown__field--active');
      if (isFinished) {
        return; // eslint-disable-line
      }
    },
    onHide(isFinished) {
      outputFieldFrom.classList.remove('date-dropdown__field--active');
      outputFieldto.classList.remove('date-dropdown__field--active');
      if (isFinished) {
        return; // eslint-disable-line
      }
    },
  };

  const datepicker = customDatepicker(`${dateDropdownSelector} .date-dropdown__input`, datepickerOptions);

  if (selectedDates) {
    datepicker.selectDate(selectedDates);
  }
  return datepicker;
}

export default dateDropdown;
