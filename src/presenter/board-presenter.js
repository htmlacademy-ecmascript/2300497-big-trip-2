import SortForm from '../view/sort.js';
import TripPointForm from '../view/trip-point.js';
import EditForm from '../view/edit-form.js';
import EditList from '../view/edit-list.js';
import { render } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortForm();
  editListComponent = new EditList();

  constructor({ container, taskModel }) {
    this.container = container;
    this.taskModel = taskModel;
  }

  init() {
    this.boardTasks = [...this.taskModel.getPoint()];

    render(this.sortComponent, this.container);
    render(this.editListComponent, this.container);

    render(new EditForm({
      point: this.boardTasks[0],
      checkedOffers: [...(this.taskModel.getOfferById(this.boardTasks[0].type, this.boardTasks[0].offers) || [])],
      offers: this.taskModel.getOfferByType(this.boardTasks[0].type) || [],
      destination: this.taskModel.getDestinationById(this.boardTasks[0].destination) || {}
    }), this.editListComponent.getElement());

    // Рендерим каждый компонент с данными из модели
    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new TripPointForm({
        point: this.boardTasks[i],
        offers: [...this.taskModel.getOfferById(this.boardTasks[i].type, this.boardTasks[i].offers)],
        destination: this.taskModel.getDestinationById(this.boardTasks[i].destination)
      }), this.editListComponent.getElement());
    }
  }
}
