import '../textfield/textfield';

import './subscribe-form.scss';

function subscribe() {
  const forms = document.querySelectorAll('.subscribe-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      alert(`Теперь на ваш адрес ${data.get('email')} будут приходить наши новости.`); // eslint-disable-line
    });
  });
}

export default subscribe;
