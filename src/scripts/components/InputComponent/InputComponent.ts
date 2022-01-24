import BaseComponent from '../BaseComponent/BaseComponent';

export default class InputComponent extends BaseComponent<HTMLInputElement> {
  constructor(classes:string [] = [], text?: string, type = '') {
    super('input');
    this.element.classList.add(...classes);
    this.element.type = type;
    if (text) {
      this.element.innerHTML = text;
    }
  }
}
