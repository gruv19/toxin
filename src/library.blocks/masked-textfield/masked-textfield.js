import './masked-textfield.scss';

function maskedTextfield() {
  const maskedTextField = $('.js-masked-textfield__input');
  const regArray = [
    {
      regexp: /^([0-3])$/,
      replacement: '$1',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])$/,
      replacement: '$1',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.$/,
      replacement: '$1.',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0-1])$/,
      replacement: '$1.$2',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])$/,
      replacement: '$1.$2',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])\.$/,
      replacement: '$1.$2.',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])\.?([1-2])$/,
      replacement: '$1.$2.$3',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])\.?([1][8-9]|[2][0])$/,
      replacement: '$1.$2.$3',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])\.?([1][8][9]|[1][9][0-9]|[2][0][0-1])$/,
      replacement: '$1.$2.$3',
    },
    {
      regexp: /^([0-2][0-9]|[3][0-1])\.?([0][1-9]|[1][0-2])\.?([1][8][9][0-9]|[1][9][0-9][0-9]|[2][0][0-1][0-9])$/,
      replacement: '$1.$2.$3',
    },
  ];

  maskedTextField.on('input', (e) => {
    let inputedValue = $(e.target).val();
    if (regArray[0].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[0].regexp, regArray[0].replacement));
    } else if (regArray[1].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[1].regexp, regArray[1].replacement));
    } else if (regArray[2].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[2].regexp, regArray[2].replacement));
    } else if (regArray[3].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[3].regexp, regArray[3].replacement));
    } else if (regArray[4].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[4].regexp, regArray[4].replacement));
    } else if (regArray[5].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[5].regexp, regArray[5].replacement));
    } else if (regArray[6].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[6].regexp, regArray[6].replacement));
    } else if (regArray[7].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[7].regexp, regArray[7].replacement));
    } else if (regArray[8].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[8].regexp, regArray[8].replacement));
    } else if (regArray[9].regexp.test(inputedValue)) {
      $(e.target).val(inputedValue.replace(regArray[9].regexp, regArray[9].replacement));
    } else {
      inputedValue = inputedValue.replace(/\D+/g, '');
      inputedValue = inputedValue.slice(0, 8);
      while (inputedValue.length) {
        let flag = false;
        /* eslint-disable */
        regArray.forEach(reg => {
          if (reg.regexp.test(inputedValue)) {
            inputedValue = inputedValue.replace(reg.regexp, reg.replacement);
            flag = true;
          }
        });
        /* eslint-enable */
        if (flag) {
          break;
        }
        inputedValue = inputedValue.slice(0, inputedValue.length - 1);
      }
      $(e.target).val(inputedValue);
    }
  });
}

export default maskedTextfield;
