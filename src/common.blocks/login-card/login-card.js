import '../../library.blocks/textfield/textfield';
import '../../library.blocks/button/button';
import './login-card.scss';

function loginCard() {
  const loginForm = document.querySelector('.login-card__form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // for (let key of data.keys()) {
    //   console.log(`${key}: ${data.get(key)}`);
    // }
  });
}

export default loginCard;
