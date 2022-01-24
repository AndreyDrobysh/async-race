import BaseComponent from '../../components/BaseComponent/BaseComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import InputComponent from '../../components/InputComponent/InputComponent';
import Container from '../../container/Container';
import './garage.css';

export default class Garage extends BaseComponent {
  container: Container;

  garageNameHeader: BaseComponent<HTMLParagraphElement>;

  settingsWrap: BaseComponent<HTMLDivElement>;

  settingsCreateWrap: BaseComponent<HTMLDivElement>;

  settingsUpdateWrap: BaseComponent<HTMLDivElement>;

  settingsGenerateWrap: BaseComponent<HTMLDivElement>;

  raceBtn: ButtonComponent;

  resetBtn: ButtonComponent;

  generateCars: ButtonComponent;

  createBtn: ButtonComponent;

  updateBtn: ButtonComponent;

  createColor: InputComponent;

  updateColor: InputComponent;

  numPage: BaseComponent<HTMLParagraphElement>;

  racesWrap: BaseComponent<HTMLDivElement>;

  carWrap: BaseComponent<HTMLDivElement>;

  carBtnWrap: BaseComponent<HTMLDivElement>;

  selectBtn: ButtonComponent;

  removeBtn: ButtonComponent;

  nameCar: BaseComponent<HTMLSpanElement>;

  constructor() {
    super('div', ['garage']);

    const container = new Container();
    this.addChild(container);
    this.container = container;

    const settingsWrap = new BaseComponent<HTMLDivElement>('div', ['settings-wrap']);
    container.addChild(settingsWrap);
    this.settingsWrap = settingsWrap;

    const settingsCreateWrap = new BaseComponent<HTMLDivElement>('div', ['settings-create-wrap']);
    settingsWrap.addChild(settingsCreateWrap);
    this.settingsCreateWrap = settingsCreateWrap;

    const createColor = new InputComponent(['create-color'], '', 'color');
    settingsCreateWrap.addChild(createColor);
    this.createColor = createColor;

    const createBtn = new ButtonComponent(['create_btn', 'text_btn'], 'create');
    settingsCreateWrap.addChild(createBtn);
    this.createBtn = createBtn;

    const settingsUpdateWrap = new BaseComponent<HTMLDivElement>('div', ['settings-update-wrap']);
    settingsWrap.addChild(settingsUpdateWrap);
    this.settingsUpdateWrap = settingsUpdateWrap;

    const updateColor = new InputComponent(['create-color'], '', 'color');
    settingsUpdateWrap.addChild(updateColor);
    this.updateColor = updateColor;

    const updateBtn = new ButtonComponent(['update_btn', 'text_btn'], 'update');
    settingsUpdateWrap.addChild(updateBtn);
    this.updateBtn = updateBtn;

    const settingsGenerateWrap = new BaseComponent<HTMLDivElement>('div', ['settings-generate-wrap']);
    settingsWrap.addChild(settingsGenerateWrap);
    this.settingsGenerateWrap = settingsGenerateWrap;

    const raceBtn = new ButtonComponent(['race_btn', 'text_btn'], 'race');
    settingsGenerateWrap.addChild(raceBtn);
    this.raceBtn = raceBtn;

    const resetBtn = new ButtonComponent(['reset_btn', 'text_btn'], 'reset');
    settingsGenerateWrap.addChild(resetBtn);
    this.resetBtn = resetBtn;

    const generateCars = new ButtonComponent(['generate-cars_btn', 'text_btn'], 'generate cars');
    settingsGenerateWrap.addChild(generateCars);
    this.generateCars = generateCars;

    const racesWrap = new BaseComponent<HTMLDivElement>('div', ['races-wrap']);
    container.addChild(racesWrap);
    this.racesWrap = racesWrap;

    const garageNameHeader = new BaseComponent<HTMLParagraphElement>('p', ['garage-name-header'], 'Garage(0)');
    racesWrap.addChild(garageNameHeader);
    this.garageNameHeader = garageNameHeader;

    const numPage = new BaseComponent<HTMLParagraphElement>('p', ['name-page'], 'Page #1');
    racesWrap.addChild(numPage);
    this.numPage = numPage;

    const carWrap = new BaseComponent<HTMLDivElement>('div', ['car-wrap']);
    racesWrap.addChild(carWrap);
    this.carWrap = carWrap;

    const carBtnWrap = new BaseComponent<HTMLDivElement>('div', ['car-btn-wrap']);
    carWrap.addChild(carBtnWrap);
    this.carBtnWrap = carBtnWrap;

    const selectBtn = new ButtonComponent(['select_btn', 'text_btn'], 'select');
    carBtnWrap.addChild(selectBtn);
    this.selectBtn = selectBtn;

    const removeBtn = new ButtonComponent(['remove', 'text_btn'], 'remove');
    carBtnWrap.addChild(removeBtn);
    this.removeBtn = removeBtn;

    const nameCar = new BaseComponent<HTMLSpanElement>('span', ['name-car'], 'tesla');
    carBtnWrap.addChild(nameCar);
    this.nameCar = nameCar;
  }
}
