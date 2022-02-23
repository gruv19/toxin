import 'paginationjs/dist/pagination.css';
import 'paginationjs/dist/pagination';

import './pagination.scss';

function pagination(
  paginateSelector,
  dataSelector,
  dataSource,
  templateFunction,
  afterPagingHandler = null,
  defaultPage = 1,
  className = 'my-pagination',
) {
  $(paginateSelector).pagination({
    dataSource,
    pageSize: 12,
    pageRange: 1,
    pageNumber: defaultPage,
    autoHidePrevious: true,
    autoHideNext: true,
    className,
    prevText: '',
    nextText: '',
    showNavigator: true,
    formatNavigator(currentPage, totalPage, totalNumber) {
      let resTotal = totalNumber;
      if (totalNumber > 100) {
        resTotal = '100+';
      }
      return `<span>${currentPage} - ${totalPage} из ${resTotal} вариантов аренды</span>`;
    },
    callback(data) {
      const html = templateFunction(data);
      $(dataSelector).html(html);
    },
    afterPaging() {
      if (afterPagingHandler) {
        afterPagingHandler();
      }
    },
  });
}

export default pagination;
