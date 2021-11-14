import "paginationjs/dist/pagination.css"
import "paginationjs/dist/pagination.js"

import "./pagination.scss";

function pagination(paginateSelector, dataSelector, dataSource, templateFunction) {
  $(paginateSelector).pagination({
    dataSource: dataSource,
    pageSize: 12,
    autoHidePrevious: true,
    autoHideNext: true,
    className: "my-pagination",
    prevText: "",
    nextText: "",
    callback: function(data) {
        const html = templateFunction(data);
        $(dataSelector).html(html);
    }
  });
}

export default pagination;