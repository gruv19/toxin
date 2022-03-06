import '../../library.blocks/button/button';
import dateDropdown from '../../library.blocks/date-dropdown/date-dropdown';
import dropdown from '../../library.blocks/dropdown/dropdown';
import '../../library.blocks/label/label';

import './booking-card.scss';

function costFormat(cost) {
  return new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'RUB',
  }).format(cost).replace(/\s₽/, '₽');
}

function getGenitive(count, genitiveObject) {
  let result = `${count} ${genitiveObject.moreThanFive}`;
  if (count === 0) {
    result = `${count} ${genitiveObject.moreThanFive}`;
  } else if (count % 100 < 5 || count % 100 > 20) {
    result = count % 10 === 1 ? `${count} ${genitiveObject.one}` : `${count} ${genitiveObject.twoToFour}`;
  }
  return result;
}

function bookingCard(roomData, bookingCardSelector = '.js-booking-card') {
  const {
    cost,
    number,
    category = '',
    service = 0,
    additional = 0,
    discount = 0,
  } = roomData;
  const bookingCardElem = document.querySelector(bookingCardSelector);
  const roomNumber = bookingCardElem.querySelector('.js-booking-card__room-number');
  const roomCategory = bookingCardElem.querySelector('.js-booking-card__room-category');
  const roomCost = bookingCardElem.querySelector('.js-booking-card__cost');
  const baseDataElem = bookingCardElem.querySelector('.js-booking-card__base-data');
  const baseSumElem = bookingCardElem.querySelector('.js-booking-card__base-sum');
  const discountElem = bookingCardElem.querySelector('.js-booking-card__service-discount');
  const serviceSumElem = bookingCardElem.querySelector('.js-booking-card__service-sum');
  const additionalSumElem = bookingCardElem.querySelector('.js-booking-card__additional-sum');
  const totalSumElem = bookingCardElem.querySelector('.js-booking-card__total-sum');
  const bookingForm = bookingCardElem.querySelector('.js-booking-card__form');

  const datepicker = dateDropdown(`${bookingCardSelector} .js-date-dropdown`, [
    '2022-01-19',
    '2022-01-23',
  ]);

  dropdown(`${bookingCardSelector} .js-dropdown`, [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);

  let days = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / 1000 / 60 / 60 / 24;
  let baseSum = days * cost;
  let totalSum = baseSum - discount + service + additional;

  roomNumber.textContent = `${number}`;
  roomCategory.textContent = `${category}`;
  roomCost.prepend(`${costFormat(cost)} `);
  baseSumElem.textContent = costFormat(baseSum);
  baseDataElem.textContent = `${costFormat(cost)} х ${getGenitive(days, { one: 'сутки', twoToFour: 'суток', moreThanFive: 'суток' })}`;
  if (discount) {
    discountElem.textContent = ` скидка ${costFormat(discount)}`;
  }
  serviceSumElem.textContent = `${costFormat(service)}`;
  additionalSumElem.textContent = `${costFormat(additional)}`;
  totalSumElem.textContent = `${costFormat(totalSum)}`;

  datepicker.$datepicker.addEventListener('changeDate', (e) => {
    e.stopPropagation();
    days = (e.detail.dateTo - e.detail.dateFrom) / 1000 / 60 / 60 / 24;
    baseSum = days * cost;
    totalSum = baseSum - discount + service + additional;
    baseSumElem.textContent = costFormat(baseSum);
    baseDataElem.textContent = `${costFormat(cost)} х ${getGenitive(days, { one: 'сутки', twoToFour: 'суток', moreThanFive: 'суток' })}`;
    totalSumElem.textContent = `${costFormat(totalSum)}`;
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

export default bookingCard;
