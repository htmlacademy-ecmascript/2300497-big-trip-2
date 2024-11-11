import { getRandomTask } from '../mock/tasks.js';

const TASK_COUNT = 3;

export default class TaskModel {
  constructor() {
    this.tasks = Array.from({ length: TASK_COUNT }, getRandomTask);
  }

  getTasks() {
    return this.tasks;
  }
}
