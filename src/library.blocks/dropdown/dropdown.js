import "../button/button.js";
import "./dropdown.scss";

function dropdown(dropdownSelector, genitive) {
  const dropdown = document.querySelector(dropdownSelector);
  const output = dropdown.querySelector(".dropdown__visually");
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const inputs = dropdown.querySelectorAll(".dropdown__input");
  const buttons = dropdown.querySelectorAll(".button");
  const steps = dropdown.querySelectorAll(".dropdown__step");
  const values = dropdown.querySelectorAll(".dropdown__item-value");
  const defaultText = output.innerText;

  const state = new Proxy(
    { active: false },
    {
      set(target, property, value) {
        if (value) {
          if (dropdownList.classList.contains("visually-hidden")) {
            dropdownList.classList.remove("visually-hidden");
          }
          if (!output.classList.contains("dropdown__visually--active")) {
            output.classList.add("dropdown__visually--active");
          }
        } else {
          if (!dropdownList.classList.contains("visually-hidden")) {
            dropdownList.classList.add("visually-hidden");
          }
          if (output.classList.contains("dropdown__visually--active")) {
            output.classList.remove("dropdown__visually--active");
          }
        }
        target[property] = value;
        return true;
      },
    }
  );

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

  function commonSum() {
    let count = 0;
    inputs.forEach((input) => {
      count += +input.value;
    });
    return count;
  }

  function changeValue(field, value, genitive) {
    let counts = [];
    let res = "";
    let stringLength = 20;
    buttons[0].parentNode.classList.remove("visually-hidden");
    if (genitive.length === 1) {
      counts.push(commonSum());
    } else {
      counts = [...inputs].map((input) => +input.value);
    }
    if (counts.every((item) => item === 0)) {
      clearDropdown();
    } else {
      counts = counts.map((item, idx) => {
        return getGenitive(item, genitive[idx]);
      });
      res = counts.join(", ");
      if (output.clientWidth > 266) {
        stringLength = 30;
      }
      res = res.length > stringLength ? res.slice(0, stringLength) + "..." : res;
      output.innerText = res;
    }
    field.innerText = String(value);
  }

  inputs.forEach((input) => {

    let loadedValue = input.nextSibling.nextSibling.nextElementSibling;
    changeValue(loadedValue, input.value, genitive);

    input.addEventListener("focus", function (e) {
      state.active = true;
    });

    input.addEventListener("blur", function (e) {
      state.active = false;
    });

    input.addEventListener("input", function (e) {
      let value = this.nextSibling.nextSibling.nextElementSibling;
      changeValue(value, this.value, genitive);
    });
  });

  steps.forEach((step) => {
    step.addEventListener("click", function (e) {
      e.stopPropagation();
      let input = this.parentNode.firstChild;
      let value = input.nextSibling.nextSibling.nextElementSibling;
      let count = +input.value;
      if (this.classList.contains("dropdown__step--minus")) {
        count = count === 0 ? 0 : count - 1;
      }
      if (this.classList.contains("dropdown__step--plus")) {
        count = count === 9 ? 9 : count + 1;
      }
      input.value = String(count);
      changeValue(value, count, genitive);
      input.focus();
    });
  });

  buttons.forEach((btn) => {
    btn.addEventListener("focus", function (e) {
      state.active = true;
    });
    btn.addEventListener("blur", function (e) {
      state.active = false;
    });
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (this.classList.contains("dropdown__button--reset")) {
        clearDropdown();
      }
      if (this.classList.contains("dropdown__button--apply")) {
        state.active = false;
      }
    });
  });

  output.addEventListener("click", function (e) {
    e.stopPropagation();
    inputs[0].focus();
  });

  dropdownList.addEventListener("focus", function (e) {
    state.active = true;
  });

  dropdownList.addEventListener("blur", function (e) {
    state.active = false;
  });

  function clearDropdown() {
    inputs.forEach((input) => {
      input.value = "0";
    });
    values.forEach((value) => {
      value.innerText = "0";
    });
    output.innerText = defaultText;
    buttons[0].parentNode.classList.add("visually-hidden");
  }
}

export default dropdown;
