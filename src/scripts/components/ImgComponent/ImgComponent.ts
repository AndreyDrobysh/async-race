import BaseComponent from "../BaseComponent/BaseComponent";

export default class ImgComponent extends BaseComponent<HTMLImageElement>{
  constructor(classes:string [] = [], src = '', alt = '', text?: string) {
    super('img');
    if (text) {
      this.element.innerHTML = text;
    }
    this.element.classList.add(...classes);
    this.element.src = src;
    this.element.alt = alt;
  }
}