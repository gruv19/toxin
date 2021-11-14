import "./like-button.scss";

function likeButtons() {
  $(".like-button").on("click", function (e) {
    let likes = +$(this).text();
    if ($(this).hasClass("like-button--active")) {
      $(this).text(`${likes - 1}`);
    } else {
      $(this).text(`${likes + 1}`);
    }
    $(this).toggleClass("like-button--active");
  });
}

export default likeButtons;