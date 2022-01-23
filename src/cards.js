import 'normalize.css';
import './common.blocks/page/page';

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
      number: 888, category: 'ЛЮКС', cost: 9990, service: 0, additional: 300,
    },
    2179,
  );
  roomCard();
  customDatepicker('.cards__input', {
    inline: true,
    buttons: [
      'clear',
      {
        content: 'Применить',
      },
    ],
  });
});
