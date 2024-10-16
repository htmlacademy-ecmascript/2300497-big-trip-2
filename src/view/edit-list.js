import { createElement } from '../render.js';

function createEditFormTemplate() {
  return `
    <ul class="trip-events__list"></ul>
    `;
}

export default class EditList {
  getTemplate() {
    return createEditFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
