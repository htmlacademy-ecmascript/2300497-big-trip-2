import {render} from './render.js';
import FiltersForm from './view/filters-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import TasksModel from './model/tasks-model.js';

const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-controls__filters');

const tasksModel = new TasksModel();
const boardPresenter = new BoardPresenter({
  container: siteMainElement,
  taskModel: tasksModel,
});

render(new FiltersForm(), siteHeaderElement);

boardPresenter.init();
