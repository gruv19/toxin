import "./__like-button.scss"

$(".form__like-button").on("click", (e) => {
  let likes = +e.target.innerText;
  e.target.innerText = e.target.classList.contains("form__like-button--active") ? `${likes - 1}` : `${likes + 1}`;
  e.target.classList.toggle("form__like-button--active");
});