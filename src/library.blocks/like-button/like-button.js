import './like-button.scss';

function likeButtons() {
  $('.js-like-button').on('click', (e) => {
    const likes = +$(e.target).text();
    if ($(e.target).hasClass('like-button--active')) {
      $(e.target).text(`${likes - 1}`);
    } else {
      $(e.target).text(`${likes + 1}`);
    }
    $(e.target).toggleClass('like-button--active');
  });
}

export default likeButtons;
