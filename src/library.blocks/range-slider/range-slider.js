import "nouislider/dist/nouislider.css";
import noUiSlider from "nouislider";

import "./range-slider.scss";

function rangeSlider(sliderBlockSelector) {
  const handlesSlider = document.querySelector(sliderBlockSelector);
  const sliderValueElement = handlesSlider.querySelector(".range-slider__visually");
  const inputFrom = handlesSlider.querySelector(".range-slider__input--from");
  const inputTo = handlesSlider.querySelector(".range-slider__input--to");
  
  noUiSlider.create(handlesSlider, {
    start: [1000, 20000],
    step: 500,
    range: {
      min: [1000],
      max: [20000],
    },
    connect: [false, true, false],
    format: {
      to(value) {
        return new Intl.NumberFormat("ru-RU", {
          maximumFractionDigits: 0,
          style: "currency",
          currency: "RUB",
        }).format(value);
      },
      from(value) {
        return +value;
      },
    },
  });
  
  handlesSlider.noUiSlider.on("update", function (values) {
    sliderValueElement.innerHTML = values.join(" - ");
    inputFrom.val = +values[0].replace(/\D+/g,"");
    inputTo.val = +values[1].replace(/\D+/g,"");
  });
}

export default rangeSlider;