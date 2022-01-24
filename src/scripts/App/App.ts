import BaseComponent from '../components/BaseComponent/BaseComponent';
import Header from '../Header/Header';
import Garage from '../Main-Pages/Garage/Garage';

export default class App extends BaseComponent {
  private header?: Header;

  private garage?: Garage;

  constructor() {
    super('div');
  }

  start(): void {
    const header = new Header();
    this.addChild(header);
    this.header = header;

    const garage = new Garage();
    this.addChild(garage);
    this.garage = garage;
  }
}
