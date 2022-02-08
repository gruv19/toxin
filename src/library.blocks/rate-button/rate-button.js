import 'star-rating.js/dist/star-rating.css';
import StarRating from 'star-rating.js';

import './rate-button.scss';

function rateButton(isForFeedback = false) {
  const rateElementSelector = isForFeedback ? '.js-rate-button__select' : '.js-rate-button';
  return new StarRating(rateElementSelector, {
    tooltip: false,
    classNames: {
      active: 'rate-button__star--active',
      base: 'rate-button__star-rating',
      selected: 'rate-button__star--selected',
    },
    maxStars: 5,
    prebuilt: !isForFeedback,
  });
}

export default rateButton;
