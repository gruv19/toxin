import '../label/label';
import '../checkbox-button/checkbox-button';

import './expandable-checkbox-list.scss';

function checkboxList() {
  const checkboxListLabels = document.querySelectorAll('.js-expandable-checkbox-list');
  checkboxListLabels.forEach((item) => {
    if (item.classList.contains('.expandable-checkbox-list--expanded')) {
      return;
    }
    item.addEventListener('click', (e) => {
      const target = e.target.closest('.expandable-checkbox-list');
      e.stopPropagation();
      target.classList.toggle('expandable-checkbox-list--focused');
    });
  });
}

export default checkboxList;
