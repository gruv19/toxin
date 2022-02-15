import '../../library.blocks/button/button';
import '../../library.blocks/label/label';
import maskedTextfield from '../../library.blocks/masked-textfield/masked-textfield';
import '../../library.blocks/radio-button/radio-button';
import '../../library.blocks/textfield/textfield';
import '../../library.blocks/toggle/toggle';

import './registration-card.scss';

function registrationCard(registrationFormSelector = '.js-registration-card__form') {
  maskedTextfield();

  const registrationForm = document.querySelector(registrationFormSelector);
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

export default registrationCard;
