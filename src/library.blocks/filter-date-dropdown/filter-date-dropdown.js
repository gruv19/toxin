import customDatepicker from '../custom-datepicker/custom-datepicker';

import './filter-date-dropdown.scss';

function filterDateDropdown(filterDateDropdownSelector = '.js-filter-date-dropdown', selectedDates = false) {
  const filterDatepicker = document.querySelector(filterDateDropdownSelector);
  const filterOutputField = filterDatepicker.querySelector('.js-filter-date-dropdown__field');
  const filterInputElement = filterDatepicker.querySelector('.js-filter-date-dropdown__input');
  const filterDatepickerOptions = {
    classes: 'filter-date-dropdown__datepicker',
    container: 'filter-date-dropdown__group',
    dateFormat: 'dd MMM',
    selectedDates,
    locale: {
      monthsShort: [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек',
      ],
    },
    onSelect({ date, datepicker }) {
      const rangeFrom = datepicker.$content?.querySelector('.-range-from-');
      const rangeTo = datepicker.$content?.querySelector('.-range-to-');
      if (!rangeTo && rangeFrom) {
        rangeFrom.classList.add('-range-to-');
      }
      filterOutputField.textContent = date[0]
        ? filterInputElement.value
        : 'Выберите даты';
    },
    onShow(isFinished) {
      filterOutputField.classList.add('filter-date-dropdown__field--active');
      if (isFinished) {
        return; // eslint-disable-line
      }
    },
    onHide(isFinished) {
      filterOutputField.classList.remove('filter-date-dropdown__field--active');
      if (isFinished) {
        return; // eslint-disable-line
      }
    },
  };
  const datepicker = customDatepicker(
    `${filterDateDropdownSelector}  .js-filter-date-dropdown__input`,
    filterDatepickerOptions,
  );

  if (selectedDates) {
    datepicker.selectDate(selectedDates);
  }
}

export default filterDateDropdown;
