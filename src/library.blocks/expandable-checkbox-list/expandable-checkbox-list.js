import "../checkbox-button/checkbox-button";
import "./expandable-checkbox-list.scss";

function checkboxList() {
  const checkboxListLabel = $(".expandable-checkbox-list__title-group");
  checkboxListLabel.on("click", function () {
    $(this).parent().toggleClass("expandable-checkbox-list--focus");
  });
}

export default checkboxList;
