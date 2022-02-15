import '../../library.blocks/button/button';
import '../../library.blocks/textfield/textfield';

import './login-card.scss';

function loginCard(loginFormSelector = '.js-login-card__form') {
  const loginForm = document.querySelector(loginFormSelector);

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

export default loginCard;
