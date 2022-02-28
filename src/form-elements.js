import 'normalize.css';
import './layouts/layout/layout';

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
    return `<ul>${'<li></li>'.repeat(data.length)}</ul>`;
  }

  checkboxList();
  filterDateDropdown('.js-form-elements__filter-date-dropdown ', ['2021-12-20', '2021-12-18']);
  dateDropdown('.js-form-elements__date-dropdown .js-date-dropdown', ['2021-12-25', '2021-12-30']);
  likeButtons();
  rateButton();
  maskedTextfield();
  pagination(
    '.form-elements__paginate-container',
    '.form-elements__data-container',
    Array(180).fill(''),
    paginateTestTemplate,
    null,
    1,
    'my-pagination my-pagination--uikit',
  );
  rangeSlider();
  subscribe();
  dropdown('.js-form-elements__dropdown .js-dropdown', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.js-form-elements__dropdown--expanded-empty .js-dropdown', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.js-form-elements__dropdown--expanded-full .js-dropdown', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  dropdown('.js-form-elements__dropdown--room-facilities .js-dropdown', [
    { one: 'спальня', twoToFour: 'спальни', moreThanFive: 'спален' },
    { one: 'кровать', twoToFour: 'кровати', moreThanFive: 'кроватей' },
    { one: 'ванная комната', twoToFour: 'ванные комнаты', moreThanFive: 'ванных комнат' },
  ]);
  dropdown('.js-form-elements__dropdown--room-facilities-expanded .js-dropdown', [
    { one: 'спальня', twoToFour: 'спальни', moreThanFive: 'спален' },
    { one: 'кровать', twoToFour: 'кровати', moreThanFive: 'кроватей' },
    { one: 'ванная комната', twoToFour: 'ванные комнаты', moreThanFive: 'ванных комнат' },
  ]);

  const expandedRoomFacilitiesDropdown = document.querySelector('.js-form-elements__dropdown--room-facilities-expanded .js-dropdown');
  expandedRoomFacilitiesDropdown.firstElementChild.classList.add('dropdown__visually--active');
  expandedRoomFacilitiesDropdown.lastElementChild.classList.remove('visually-hidden');
  expandedRoomFacilitiesDropdown.lastElementChild.style.position = 'relative';

  const emptyExpandedDropdown = document.querySelector('.js-form-elements__dropdown--expanded-empty .js-dropdown');
  emptyExpandedDropdown.firstElementChild.classList.add('dropdown__visually--active');
  emptyExpandedDropdown.lastElementChild.classList.remove('visually-hidden');
  emptyExpandedDropdown.lastElementChild.style.position = 'relative';

  const fullExpandedDropdown = document.querySelector('.js-form-elements__dropdown--expanded-full .js-dropdown');
  fullExpandedDropdown.firstElementChild.classList.add('dropdown__visually--active');
  fullExpandedDropdown.lastElementChild.classList.remove('visually-hidden');
  fullExpandedDropdown.lastElementChild.style.position = 'relative';
});
