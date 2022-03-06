import 'normalize.css';
import './layouts/layout/layout';

import './common.blocks/uikit-header/uikit-header';
import searchCard from './common.blocks/search-card/search-card';
import registrationCard from './common.blocks/registration-card/registration-card';
import loginCard from './common.blocks/login-card/login-card';
import bookingCard from './common.blocks/booking-card/booking-card';
import roomCard from './common.blocks/room-card/room-card';
import customDatepicker from './library.blocks/custom-datepicker/custom-datepicker';
import './templates/cards/cards.scss';

$(window).on('load', () => {
  searchCard();
  registrationCard();
  loginCard();
  bookingCard(
    {
      cost: 9990,
      number: 888,
      category: 'ЛЮКС',
      additional: 300,
      discount: 2179,
    },
    '.js-cards__booking-card .js-booking-card',
  );
  roomCard();
  customDatepicker('.js-cards__input', {
    inline: true,
    buttons: [
      'clear',
      {
        content: 'Применить',
      },
    ],
  });
});
