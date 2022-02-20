import 'normalize.css';
import './layouts/layout/layout';

// import Chart from 'chart.js/auto';
import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';
import bookingCard from './common.blocks/booking-card/booking-card';
import './library.blocks/info-card/info-card';
import './library.blocks/review/review';
import './library.blocks/bullet-list/bullet-list';
import doughnutChart from './library.blocks/doughnut-chart/doughnut-chart';

import './templates/room-details/room-details.scss';

$(window).on('load', () => {
  header('.header');
  footer();
  bookingCard(
    {
      number: 888,
      category: 'ЛЮКС',
      cost: 9990,
      service: 0,
      additional: 300,
    },
    2179,
  );

  doughnutChart('.js-doughnut-chart', [
    {
      label: 'Великолепно',
      data: 130,
      color: {
        start: '#FFE39C',
        end: '#FFBA9C',
      },
    },
    {
      label: 'Хорошо',
      data: 65,
      color: {
        start: '#6FCF97',
        end: '#66D2EA',
      },
    },
    {
      label: 'Удовлетворительно',
      data: 65,
      color: {
        start: '#BC9CFF',
        end: '#8BA4F9',
      },
    },
    {
      label: 'Разочарован',
      data: 0,
      color: {
        start: '#909090',
        end: '#3D4975',
      },
    },
  ]);
});
