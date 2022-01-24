import BaseComponent from '../../components/BaseComponent/BaseComponent';
import Container from '../../container/Container';
import './winners.css'

export default class Winners extends BaseComponent {
  container: Container;

  winnersNameHeader: BaseComponent<HTMLParagraphElement>;

  constructor() {
    super('div', ['winners'])

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const winnersNameHeader = new BaseComponent<HTMLParagraphElement>('p', ['winners-name-header'], 'Garage(0)');
    container.addChild(winnersNameHeader);
    this.winnersNameHeader = winnersNameHeader;
  }
}