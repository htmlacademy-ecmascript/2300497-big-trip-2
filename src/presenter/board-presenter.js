import SortForm from '../view/sort.js';
import TripPointForm from '../view/trip-point.js';
import EditForm from '../view/edit-form.js';
import EditList from '../view/edit-list.js';
import { render } from '../render.js';


export default class BoardPresenter {
  sortComponent = new SortForm();
  editListComponent = new EditList();

  constructor({ container, taskModel}) {
    this.container = container;
    this.taskModel = taskModel;
  }

  init() {
    this.boardTasks = [...this.taskModel.getTasks()];

    render(this.sortComponent, this.container);
    render(this.editListComponent, this.container);
    render(new EditForm(), this.editListComponent.getElement());

    for (let i = 0; i < this.boardTasks.length; i++) {
      render(new TripPointForm({task: this.boardTasks[i]}), this.editListComponent.getElement());
    }
  }
}
