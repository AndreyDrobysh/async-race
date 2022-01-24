import BaseComponent from '../BaseComponent/BaseComponent';

export default class ButtonComponent extends BaseComponent<HTMLButtonElement> {
  constructor(classes:string [] = [], text?: string) {
    super('button');
    this.element.classList.add(...classes);
    if (text) {
      this.element.innerHTML = text;
    }
  }
}
