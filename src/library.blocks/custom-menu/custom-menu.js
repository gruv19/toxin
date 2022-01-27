import './smartmenus/jquery.smartmenus.min';
import './smartmenus/sm-core-css.css';

function customMenu(menuSelector) {
  $(menuSelector).smartmenus({
    subIndicatorsPos: 'append',
    subIndicatorsText: '',
    subMenusSubOffsetY: 0,
    mainMenuSubOffsetY: 25,
    mainMenuSubOffsetX: -10,
  });
}

export default customMenu;
