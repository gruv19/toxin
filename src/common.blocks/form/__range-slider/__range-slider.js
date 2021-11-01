import "./__range-slider.scss";

import "nouislider/dist/nouislider.css";
import noUiSlider from "nouislider";

const handlesSlider = document.querySelector(".form__range-slider-input-group");
const sliderValueElement = document.querySelector(
  ".form__range-slider-label-input"
);

noUiSlider.create(handlesSlider, {
  start: [1000, 20000],
  step: 500,
  range: {
    min: [1000],
    max: [20000],
  },
  connect: [false, true, false],
  format: {
    to: function (value) {
      return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
        value
      );
    },
    from: function (value) {
      return +value;
    },
  },
});

handlesSlider.noUiSlider.on("update", function (values) {
  sliderValueElement.innerHTML = values.join(" - ");
});
