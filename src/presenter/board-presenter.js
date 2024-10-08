import FiltersForm from '../view/filters.js';
import NewForm from '../view/new-form.js';
import SortForm from '../view/sort.js';
import TripPointForm from '../view/trip-point.js';
import EditForm from '../view/edit-form.js';
import EditList from '../view/edit-list.js';
import { render } from '../render.js';


export default class BoardPresenter {
  filters = new FiltersForm();
  sortComponent = new SortForm();
  editListComponent = new EditList();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.filters, this.container);
    render(this.sortComponent, this.container);
    render(this.editListComponent, this.container);
    render(new EditForm(), this.editListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointForm(), this.editListComponent.getElement());
    }
  }
}
