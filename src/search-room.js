import 'normalize.css';
import './layouts/layout/layout';

import header from './common.blocks/header/header';
import footer from './common.blocks/footer/footer';
import './library.blocks/label/label';
import filterDateDropdown from './library.blocks/filter-date-dropdown/filter-date-dropdown';
import dropdown from './library.blocks/dropdown/dropdown';
import rangeSlider from './library.blocks/range-slider/range-slider';
import './library.blocks/checkbox-button/checkbox-button';
import checkboxList from './library.blocks/expandable-checkbox-list/expandable-checkbox-list';
import roomCard from './common.blocks/room-card/room-card';
import pagination from './library.blocks/pagination/pagination';
import './library.blocks/button/button';

import './templates/search-room/search-room.scss';

$(window).on('load', () => {
  const pageData = [
    {
      number: 888,
      category: 'ЛЮКС',
      cost: '9 990',
      rating: 5,
      reviewCount: 145,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg'],
    },
    {
      number: 840,
      category: '',
      cost: '9 990',
      rating: 4,
      reviewCount: 65,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 980,
      category: 'ЛЮКС',
      cost: '8 500',
      rating: 3,
      reviewCount: 35,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 856,
      category: '',
      cost: '7 300',
      rating: 5,
      reviewCount: 19,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 740,
      category: '',
      cost: '6 000',
      rating: 4,
      reviewCount: 11,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 982,
      category: '',
      cost: '5 800',
      rating: 3,
      reviewCount: 56,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 678,
      category: '',
      cost: '5 500',
      rating: 5,
      reviewCount: 45,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 450,
      category: '',
      cost: '5 300',
      rating: 4,
      reviewCount: 39,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 350,
      category: '',
      cost: '5 000',
      rating: 3,
      reviewCount: 77,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 666,
      category: '',
      cost: '5 000',
      rating: 5,
      reviewCount: 25,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 444,
      category: '',
      cost: '5 000',
      rating: 3,
      reviewCount: 15,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 352,
      category: '',
      cost: '5 000',
      rating: 3,
      reviewCount: 55,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
    {
      number: 200,
      category: 'ЛЮКС',
      cost: '9 990',
      rating: 5,
      reviewCount: 124,
      images: ['image-1.min.jpg', 'image-2.min.jpg', 'image-3.min.jpg', 'image-4.min.jpg'],
    },
  ];
  const filterBtn = document.querySelector('.search-room__filters-toggler');
  const pageOverlay = document.querySelector('.search-room__overlay');
  const filtersBlock = document.querySelector('.search-room__filters');
  const pageBody = document.querySelector('.page__body');
  const expCheckboxList = filtersBlock.querySelector('.expandable-checkbox-list');
  const filtersCloseBtn = document.querySelector('.search-room__filters-close');

  function paginateTemplate(data) {
    const template = document.querySelector('#template');
    const html = document.createElement('div');
    data.forEach((item) => {
      const card = template.content.cloneNode(true);
      card.querySelector('.room-card__room-number').textContent = item.number;
      card.querySelector('.room-card__room-category').textContent = item.category;
      card.querySelector('.room-card__cost').firstChild.textContent = `${item.cost}₽`;
      card.querySelector('.room-card__rating').setAttribute('name', `room-rating-${item.number}`);
      card.querySelector(`.rate-button__value[value='${item.rating}']`).setAttribute('selected', 'selected');
      card.querySelector('.gl-star-rating--stars').childNodes.forEach((node, idx) => {
        if (idx < item.rating) {
          node.classList.add('gl-active');
        }
      });
      card.querySelector('.room-card__reviews').textContent = item.reviewCount;
      item.images.forEach((img, idx) => {
        const slide = document.createElement('li');
        slide.classList.add('glide__slide');
        const link = document.createElement('a');
        link.classList.add('glide__link');
        link.setAttribute('href', `/room-details.html?number=${item.number}`);
        const image = new Image();
        image.src = require(`/src/images/rooms/${item.number}/${img}`);
        image.classList.add('glide__img');
        link.appendChild(image);
        slide.appendChild(link);
        card.querySelector('.glide__slides').appendChild(slide);

        const bullet = document.createElement('div');
        bullet.classList.add('glide__bullet');
        bullet.setAttribute('data-glide-dir', `=${idx}`);
        card.querySelector('.glide__bullets').appendChild(bullet);
      });
      html.appendChild(card);
    });
    return html.innerHTML;
  }

  function filterBtnHandler(event) {
    event.preventDefault();
    pageOverlay.classList.add('search-room__overlay--active');
    filtersBlock.classList.add('search-room__filters--active');
    pageBody.style.overflow = 'hidden';
    filtersBlock.style.width = `${filtersBlock.offsetWidth + (filtersBlock.offsetWidth - filtersBlock.clientWidth)}px`;
    expCheckboxList.classList.add('expandable-checkbox-list--focus');
  }

  function filtersCloseBtnHandler(event) {
    event.preventDefault();
    pageOverlay.classList.remove('search-room__overlay--active');
    filtersBlock.classList.remove('search-room__filters--active');
    pageBody.style.overflow = 'auto';
    filtersBlock.style.width = '';
    expCheckboxList.classList.remove('expandable-checkbox-list--focus');
  }

  pagination(
    '.search-room__room-paginate',
    '.search-room__room-cards',
    pageData,
    paginateTemplate,
    roomCard,
  );

  header('.header');
  footer();
  filterDateDropdown('.search-room__filter-date-dropdown', [
    '2022-01-25',
    '2022-01-30',
  ]);
  dropdown('.search-room__dropdown--guests', [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);
  rangeSlider('.search-room__range-slider');
  dropdown('.search-room__dropdown--room', [
    { one: 'спальня', twoToFour: 'спальни', moreThanFive: 'спален' },
    { one: 'кровать', twoToFour: 'кровати', moreThanFive: 'кроватей' },
    {
      one: 'ванная комната',
      twoToFour: 'ванные комнаты',
      moreThanFive: 'ванных комнат',
    },
  ]);
  checkboxList();
  filterBtn.addEventListener('click', filterBtnHandler);
  filtersCloseBtn.addEventListener('click', filtersCloseBtnHandler);
  pageOverlay.addEventListener('click', filtersCloseBtnHandler);
});
