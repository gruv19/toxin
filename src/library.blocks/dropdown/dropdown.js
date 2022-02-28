import '../button/button';
import './dropdown.scss';

function dropdown(dropdownSelector = '.js-dropdown', genitive = [{ one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' }]) {
  const dropdownEl = document.querySelector(dropdownSelector);
  const output = dropdownEl.querySelector('.js-dropdown__visually');
  const dropdownList = dropdownEl.querySelector('.js-dropdown__list');
  const inputs = dropdownEl.querySelectorAll('.js-dropdown__input');
  const buttons = dropdownEl.querySelectorAll('.js-dropdown__button');
  const steps = dropdownEl.querySelectorAll('.js-dropdown__step');
  const values = dropdownEl.querySelectorAll('.js-dropdown__item-value');
  const defaultText = output.innerText;

  const state = {
    set active(value) {
      if (value) {
        if (dropdownList.classList.contains('visually-hidden')) {
          dropdownList.classList.remove('visually-hidden');
        }
        if (!output.classList.contains('dropdown__visually--active')) {
          output.classList.add('dropdown__visually--active');
        }
      } else {
        if (!dropdownList.classList.contains('visually-hidden')) {
          dropdownList.classList.add('visually-hidden');
        }
        if (output.classList.contains('dropdown__visually--active')) {
          output.classList.remove('dropdown__visually--active');
        }
      }
    },
  };

  function getGenitive(count, genitiveObject) {
    let result = `${count} ${genitiveObject.moreThanFive}`;
    if (count === 0) {
      result = `${count} ${genitiveObject.moreThanFive}`;
    } else if (count % 100 < 5 || count % 100 > 20) {
      result = count % 10 === 1 ? `${count} ${genitiveObject.one}` : `${count} ${genitiveObject.twoToFour}`;
    }
    return result;
  }

  function commonSum() {
    let count = 0;
    inputs.forEach((input) => {
      count += +input.value;
    });
    return count;
  }

  function clearDropdown() {
    inputs.forEach((input) => {
      input.value = '0'; // eslint-disable-line
      input.setAttribute('value', '0');
    });
    values.forEach((value) => {
      value.innerText = '0'; // eslint-disable-line
    });
    output.innerText = defaultText;
    buttons[0].parentNode.classList.add('visually-hidden');
  }

  function changeValue(field, value, genitiveObject) {
    let counts = [];
    let res = '';
    buttons[0].parentNode.classList.remove('visually-hidden');
    if (genitiveObject.length === 1) {
      counts.push(commonSum());
    } else {
      counts = [...inputs].map((input) => +input.value);
    }
    if (counts.every((item) => item === 0)) {
      clearDropdown();
    } else {
      counts = counts.map((item, idx) => getGenitive(item, genitiveObject[idx]));
      res = counts.join(', ');
      output.innerText = res;
    }
    field.innerText = `${value}`; // eslint-disable-line
  }

  inputs.forEach((input) => {
    const loadedValue = input.nextSibling.nextSibling.nextElementSibling;
    changeValue(loadedValue, input.value, genitive);

    input.addEventListener('focus', () => {
      state.active = true;
    });

    input.addEventListener('blur', () => {
      state.active = false;
    });

    input.addEventListener('input', (e) => {
      const target = e.target.nextSibling.nextSibling.nextElementSibling;
      e.target.setAttribute('value', `${e.target.value}`);
      changeValue(target, e.target.value, genitive);
    });
  });

  steps.forEach((step) => {
    step.addEventListener('click', (e) => {
      e.stopPropagation();
      const input = e.target.parentNode.firstChild;
      const value = input.nextSibling.nextSibling.nextElementSibling;
      let count = +input.value;
      if (e.target.classList.contains('dropdown__step--minus')) {
        count = count === 0 ? 0 : count - 1;
      }
      if (e.target.classList.contains('dropdown__step--plus')) {
        count = count === 9 ? 9 : count + 1;
      }
      input.value = `${count}`;
      input.setAttribute('value', `${count}`);
      changeValue(value, count, genitive);
    });
  });

  buttons.forEach((btn) => {
    btn.addEventListener('focus', () => {
      state.active = true;
    });
    btn.addEventListener('blur', () => {
      state.active = false;
    });
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.target.classList.contains('dropdown__button--reset')) {
        clearDropdown();
      }
      if (e.target.classList.contains('dropdown__button--apply')) {
        state.active = false;
      }
    });
  });

  output.addEventListener('click', (e) => {
    e.stopPropagation();
    inputs[0].focus();
  });

  dropdownList.addEventListener('focus', () => {
    state.active = true;
  });

  dropdownList.addEventListener('blur', () => {
    state.active = false;
  });
}

export default dropdown;
