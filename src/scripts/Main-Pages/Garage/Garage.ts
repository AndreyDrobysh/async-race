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

  racesWrap?: BaseComponent<HTMLDivElement>;

  carWrap?: BaseComponent<HTMLDivElement>;

  carBtnWrap?: BaseComponent<HTMLDivElement>;

  selectBtn?: ButtonComponent;

  removeBtn?: ButtonComponent;

  nameCar?: BaseComponent<HTMLSpanElement>;

  startStopWrap?: BaseComponent<HTMLDivElement>;

  startCarBtn?: ButtonComponent;

  stopCarBtn?: ButtonComponent;

  road?: BaseComponent<HTMLDivElement>;

  car?: BaseComponent<HTMLDivElement>;

  carFinishWrap?: BaseComponent<HTMLDivElement>;

  finish?: BaseComponent<HTMLDivElement>;

  createNameCar?: InputComponent;

  updateNameCar?: InputComponent;

  nextPrevPage?: BaseComponent<HTMLDivElement>;

  prevPage?: ButtonComponent;

  nextPage?: ButtonComponent;

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

    const createNameCar = new InputComponent(['create-name-car'], '', 'text');
    settingsCreateWrap.addChild(createNameCar);
    this.createNameCar = createNameCar;

    const createColor = new InputComponent(['create-color'], '', 'color');
    settingsCreateWrap.addChild(createColor);
    this.createColor = createColor;

    const createBtn = new ButtonComponent(['create_btn', 'text_btn'], 'create');
    settingsCreateWrap.addChild(createBtn);
    createBtn.onClick(() => {
      this.createCar();
    });
    this.createBtn = createBtn;

    const settingsUpdateWrap = new BaseComponent<HTMLDivElement>('div', ['settings-update-wrap']);
    settingsWrap.addChild(settingsUpdateWrap);
    this.settingsUpdateWrap = settingsUpdateWrap;

    const updateNameCar = new InputComponent(['update-name-car'], '', 'text');
    settingsUpdateWrap.addChild(updateNameCar);
    this.updateNameCar = updateNameCar;

    const updateColor = new InputComponent(['update-color'], '', 'color');
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

    const nextPrevPage = new BaseComponent<HTMLDivElement>('div', ['next-prev-page']);
    racesWrap.addChild(nextPrevPage);
    this.nextPrevPage = nextPrevPage;

    const prevPage = new ButtonComponent(['prev-page_btn', 'text_btn'], 'prev');
    nextPrevPage.addChild(prevPage);
    this.prevPage = prevPage;

    const nextPage = new ButtonComponent(['next-page_btn', 'text_btn'], 'next');
    nextPrevPage.addChild(nextPage);
    this.nextPage = nextPage;
  }

  createCar() {
    const carWrap = new BaseComponent<HTMLDivElement>('div', ['car-wrap']);
    this.addChild(carWrap);
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

    const nameCar = new BaseComponent<HTMLSpanElement>('span', ['name-car'], 'Tesla');
    carBtnWrap.addChild(nameCar);
    this.nameCar = nameCar;

    const startStopWrap = new BaseComponent<HTMLDivElement>('div', ['start-stop-wrap']);
    carWrap.addChild(startStopWrap);
    this.startStopWrap = startStopWrap;

    const startCarBtn = new ButtonComponent(['start-car_btn', 'drive_btn'], 'A');
    startStopWrap.addChild(startCarBtn);
    this.startCarBtn = startCarBtn;

    const stopCarBtn = new ButtonComponent(['stop-car_btn', 'stop_btn'], 'B');
    startStopWrap.addChild(stopCarBtn);
    this.stopCarBtn = stopCarBtn;

    const carFinishWrap = new BaseComponent<HTMLDivElement>('div', ['car-finish-wrap']);
    carWrap.addChild(carFinishWrap);
    this.carFinishWrap = carFinishWrap;

    const car = new BaseComponent<HTMLDivElement>('div', ['car']);
    carFinishWrap.addChild(car);
    this.car = car;

    const finish = new BaseComponent<HTMLDivElement>('div', ['finish']);
    carFinishWrap.addChild(finish);
    this.finish = finish;

    const road = new BaseComponent<HTMLDivElement>('div', ['road']);
    carFinishWrap.addChild(road);
    this.road = road;
  }
}
