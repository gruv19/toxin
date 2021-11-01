import "./__select-field.scss";

const select = document.querySelector(".form__select-field");
// const items = select.querySelectorAll(".form__select-item");
const inputs = select.querySelectorAll("input");
const minusButtous = select.querySelectorAll(".form__select-item-minus");
const plusButtous = select.querySelectorAll(".form__select-item-plus");
const cleanButton = select.querySelector(".form__select-button-clean");
const saveButton = select.querySelector(".form__select-button-save");
const counters = select.querySelectorAll(".form__select-item-count");

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    const counter = e.target.parentNode.querySelector(".form__select-item-count");
    counter.innerText = e.target.value;
  });
});

minusButtous.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const counter = e.target.parentNode.querySelector(".form__select-item-count");
    if (+counter.innerText - 1 > -1) {
      const input = e.target.parentNode.parentNode.querySelector("input");
      input.value = +counter.innerText - 1;
      counter.innerText = input.value;
    }
  });
});

plusButtous.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const counter = e.target.parentNode.querySelector(".form__select-item-count");
    const input = e.target.parentNode.parentNode.querySelector("input");
    input.value = +counter.innerText + 1;
    counter.innerText = input.value;
  });
});

cleanButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach(input => {
    input.value = 0;
  });
  counters.forEach(counter => {
    counter.innerText = 0;
  });
});

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.blur();
});