import dateDropdown from "../../library.blocks/date-dropdown/date-dropdown.js";
import dropdown from "../../library.blocks/dropdown/dropdown.js";
import "../../library.blocks/label/label.js";
import "../../library.blocks/button/button.js";

import "./booking-card.scss";

function costFormat(cost) {
  cost = new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "RUB",
  }).format(cost);
  return cost.replace(/\s₽/,"₽");;
}

function getGenitive(count, genitive) {
  if (count === 0) {
    return `${count} ${genitive.moreThanFive}`;
  }
  if (count % 100 >= 5 && count % 100 <= 20) {
    return `${count} ${genitive.moreThanFive}`;
  } else {
    if (count % 10 === 1) {
      return `${count} ${genitive.one}`;
    }
    if (count % 10 >= 2 && count % 10 <= 4) {
      return `${count} ${genitive.twoToFour}`;
    }
    if (count % 10 >= 5 || count % 10 === 0) {
      return `${count} ${genitive.moreThanFive}`;
    }
  }
}

/**
 *
 * @param {Object} roomData
 */

function bookingCard(roomData, discount = false) {
  const roomNumber = document.querySelector(".booking-card__room-number");
  const roomCategory = document.querySelector(".booking-card__room-category");
  const roomCost = document.querySelector(".booking-card__cost");
  const baseSumElem = document.querySelector(".booking-card__base-sum");
  const baseDataElem = document.querySelector(".booking-card__base-data");
  const discountElem = document.querySelector(".booking-card__service-discount");
  const serviceSumElem = document.querySelector(".booking-card__service-sum");
  const additionalSumElem = document.querySelector(".booking-card__additional-sum");
  const totalSumElem = document.querySelector(".booking-card__total-sum");
  
  const datepicker = dateDropdown(".booking-card__date-dropdown", [
    "2022-01-19",
    "2022-01-23",
  ]);
  dropdown(".booking-card__dropdown", [
    { one: "гость", twoToFour: "гостя", moreThanFive: "гостей" },
  ]);

  let cost = costFormat(roomData.cost);
  let days = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / 1000 / 60 / 60 / 24;
  let baseSum = days * roomData.cost;
  let totalSum = baseSum - discount + roomData.service + roomData.additional;

  roomNumber.textContent = `${roomData.number} `;
  roomCategory.textContent = `${roomData.category}`;
  roomCost.prepend(`${cost} `);
  baseSumElem.textContent = costFormat(baseSum);
  baseDataElem.textContent = `${cost} х ${getGenitive(days, { one: "сутки", twoToFour: "суток", moreThanFive: "суток" })}`;
  if (discount) {
    discountElem.textContent = `скидка ${costFormat(discount)}`;
  }
  serviceSumElem.textContent = `${costFormat(roomData.service)}`;
  additionalSumElem.textContent = `${costFormat(roomData.additional)}`;
  totalSumElem.textContent = `${costFormat(totalSum)}`;


  datepicker.$datepicker.addEventListener("changeDate", (e) => {
    e.stopPropagation();
    // console.log();
    // days = (datepicker.selectedDates[1] - datepicker.selectedDates[0]) / 1000 / 60 / 60 / 24;
    days = (e.detail.dateTo - e.detail.dateFrom) / 1000 / 60 / 60 / 24;
    baseSum = days * roomData.cost;
    totalSum = baseSum - discount + roomData.service + roomData.additional;
    baseSumElem.textContent = costFormat(baseSum);
    baseDataElem.textContent = `${cost} х ${getGenitive(days, { one: "сутки", twoToFour: "суток", moreThanFive: "суток" })}`;
    totalSumElem.textContent = `${costFormat(totalSum)}`;
  });

}

export default bookingCard;