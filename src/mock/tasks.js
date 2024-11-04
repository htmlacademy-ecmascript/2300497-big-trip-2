import {getRandomArrayElement} from '../utils.js';
import {COLORS} from '../const.js';

const mockTasks = [
  {},
  {},
  {},
  {},
];

function getRandomTask() {
  return getRandomArrayElement(mockTasks);
}

export {getRandomTask};
