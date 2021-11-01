import "paginationjs/dist/pagination.css"
import "paginationjs/dist/pagination.js"

import "./__pagination.scss";

// console.log(pug);

function simpleTemplate(data) {
  let html = "<ul>";
  data.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += "</ul>";
  return html;
} 

$(".paginate-container").pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  pageSize: 5,
  autoHidePrevious: true,
  autoHideNext: true,
  className: "my-pagination",
  prevText: "<",
  nextText: ">",
  callback: function(data, pagination) {
      // template method of yourself
      let html = simpleTemplate(data);
      $(".data-container").html(html);
  }
});