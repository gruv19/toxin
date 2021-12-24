import "./login-card.scss";

function loginCard() {
  const loginForm = document.querySelector(".login-card__form");
  const registrarionBtn = document.querySelector(".login-card__button-registration");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    for (let key of data.keys()) {
      console.log(`${key}: ${data.get(key)}`);
    }
  });

  registrarionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Тут должно быть модальное окно для регистрации!:)");
  });
}

export default loginCard;
