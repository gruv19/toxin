import "star-rating.js/dist/star-rating.css";
import StarRating from "star-rating.js";

import "./__rate-button.scss";

new StarRating(".form__rate-button", {
  tooltip: false,
  classNames: {
    active: "my-gl-active",
    base: "my-gl-star-rating",
    selected: "my-gl-selected",
  },
  maxStars: 5,
});
