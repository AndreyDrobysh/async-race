import BaseComponent from '../components/BaseComponent/BaseComponent';
import './header.css';
import Container from '../container/Container';

import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

export default class Header extends BaseComponent {
  container: Container;

  headerNav: BaseComponent<HTMLDivElement>;

  garageBtn: ButtonComponent;

  winnersBtn: ButtonComponent;

  constructor() {
    super('header');

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const headerNav = new BaseComponent<HTMLDivElement>('div', ['nav-wrap']);
    container.addChild(headerNav);
    this.headerNav = headerNav;

    const garageBtn = new ButtonComponent(['open-garage', 'text_btn'], 'to Garage');
    headerNav.addChild(garageBtn);
    this.garageBtn = garageBtn;

    const winnersBtn = new ButtonComponent(['open-winners', 'text_btn'], 'to Winners');
    headerNav.addChild(winnersBtn);
    this.winnersBtn = winnersBtn;
  }
}
