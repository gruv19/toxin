import 'normalize.css';
import './common.blocks/page/page';

import './library.blocks/bullet-list/bullet-list';
import './library.blocks/info-card/info-card';
import './library.blocks/review/review';
import './library.blocks/label/label';

import './library.blocks/button/button';
import './library.blocks/checkbox-button/checkbox-button';
import checkboxList from './library.blocks/expandable-checkbox-list/expandable-checkbox-list';
import './library.blocks/toggle/toggle';
import './library.blocks/radio-button/radio-button';
import './library.blocks/textfield/textfield';
import filterDateDropdown from './library.blocks/filter-date-dropdown/filter-date-dropdown';
import dateDropdown from './library.blocks/date-dropdown/date-dropdown';
import likeButtons from './library.blocks/like-button/like-button';
import rateButton from './library.blocks/rate-button/rate-button';
import maskedTextfield from './library.blocks/masked-textfield/masked-textfield';
import pagination from './library.blocks/pagination/pagination';
import rangeSlider from './library.blocks/range-slider/range-slider';
import subscribe from './library.blocks/subscribe-form/subscribe-form';
import dropdown from './library.blocks/dropdown/dropdown';

import './common.blocks/uikit-header/uikit-header';
import './templates/form-elements/form-elements.scss';

$(window).on('load', () => {
  function paginateTestTemplate(data) {
    let html = '<ul>';
    data.forEach((item) => {
      html += `<li>${item}</li>`;
    });
    html += '</ul>';
    return html;
  }

  checkboxList();
  filterDateDropdown('.form-elements__filter-date-dropdown', ['2021-12-20', '2021-12-18']);
  dateDropdown('.form-elements__date-dropdown', ['2021-12-25', '2021-12-30']);
  likeButtons();
  rateButton();
  maskedTextfield();
  pagination(
    '.form-elements__data-container',
    '.form-elements__paginate-container',
    Array(180).fill(''),
    paginateTestTemplate,
    null,
    3,
  );
  rangeSlider('.form-elements__range-slider');
  subscribe();
  dropdown('.form-elements__dropdown', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.form-elements__dropdown--guest-expanded-empty', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.form-elements__dropdown--guest-expanded-full', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.form-elements__dropdown--room', [
    { one: 'спальня', twoToFour: 'спальни', moreThanFive: 'спален' },
    { one: 'кровать', twoToFour: 'кровати', moreThanFive: 'кроватей' },
    { one: 'ванная комната', twoToFour: 'ванные комнаты', moreThanFive: 'ванных комнат' },
  ]);
  dropdown('.form-elements__dropdown--room-expanded', [
    { one: 'спальня', twoToFour: 'спальни', moreThanFive: 'спален' },
    { one: 'кровать', twoToFour: 'кровати', moreThanFive: 'кроватей' },
    { one: 'ванная комната', twoToFour: 'ванные комнаты', moreThanFive: 'ванных комнат' },
  ]);

  const activeDropdownRoom = document.querySelector('.form-elements__dropdown--room-expanded');
  activeDropdownRoom.firstElementChild.classList.add('dropdown__visually--active');
  activeDropdownRoom.lastElementChild.classList.remove('visually-hidden');
  activeDropdownRoom.lastElementChild.style.position = 'relative';

  const emptyDropdownGuests = document.querySelector('.form-elements__dropdown--guest-expanded-empty');
  emptyDropdownGuests.firstElementChild.classList.add('dropdown__visually--active');
  emptyDropdownGuests.lastElementChild.classList.remove('visually-hidden');
  emptyDropdownGuests.lastElementChild.style.position = 'relative';

  const fullDropdownGuests = document.querySelector('.form-elements__dropdown--guest-expanded-full');
  fullDropdownGuests.firstElementChild.classList.add('dropdown__visually--active');
  fullDropdownGuests.lastElementChild.classList.remove('visually-hidden');
  fullDropdownGuests.lastElementChild.style.position = 'relative';
});
