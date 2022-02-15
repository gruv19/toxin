import '../../library.blocks/button/button';
import dateDropdown from '../../library.blocks/date-dropdown/date-dropdown';
import dropdown from '../../library.blocks/dropdown/dropdown';
import '../../library.blocks/label/label';

import './search-card.scss';

function searchCard(searchFormSelector = '.js-search-card__form') {
  dropdown(`${searchFormSelector} .js-dropdown`, [
    { one: 'гость', twoToFour: 'гостя', moreThanFive: 'гостей' },
  ]);

  dateDropdown(`${searchFormSelector} .js-date-dropdown`);
  const searchForm = document.querySelector(searchFormSelector);

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = new URL('/search-room.html', window.location.origin);
    window.location.href = url.href;
  });
}

export default searchCard;
