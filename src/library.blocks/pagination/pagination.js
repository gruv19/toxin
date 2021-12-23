import "paginationjs/dist/pagination.css";
import "paginationjs/dist/pagination.js";

import "./pagination.scss";

function pagination(
  paginateSelector,
  dataSelector,
  dataSource,
  templateFunction,
  defaultPage = 1,
) {
  $(paginateSelector).pagination({
    dataSource: dataSource,
    pageSize: 12,
    pageRange: 1,
    pageNumber: defaultPage,
    autoHidePrevious: true,
    autoHideNext: true,
    className: "my-pagination",
    prevText: "",
    nextText: "",
    showNavigator: true,
    formatNavigator: function(currentPage, totalPage, totalNumber) {
      let resTotal = totalNumber;
      if (totalNumber > 100) {
        resTotal = "100+";
      }
      return `<span>${currentPage} - ${totalPage} из ${resTotal} вариантов аренды</span>`
    },
    callback: function (data) {
      const html = templateFunction(data);
      $(dataSelector).html(html);
    },
  });
}

export default pagination;
