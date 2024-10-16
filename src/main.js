import {render} from './render.js';
import NewTaskButtonView from './view/new-form.js';
import FiltersForm from './view/filters.js';
import BoardPresenter from './presenter/board-presenter.js';


const siteMainElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-controls__filters');
const newTaskButtonElement = document.querySelector('.trip-main__event-add-btn');

const boardPresenter = new BoardPresenter({ container: siteMainElement });

render(new NewTaskButtonView(), newTaskButtonElement);
render(new FiltersForm(), siteHeaderElement);

boardPresenter.init();
