import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

const DATE_FORMAT = 'D MMMM';

dayjs.extend(duration);

function getRandomArrayElement(items){
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getDifferenceInTime(dateFrom, dateTo) {
  const diff = dayjs.duration(dayjs(dateTo).diff(dayjs(dateFrom)));

  // Форматируем результат в виде "HH ч MM м"
  const hours = diff.hours();
  const minutes = diff.minutes();

  return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
}

export {getDifferenceInTime, getRandomArrayElement, humanizeTaskDueDate, DATE_FORMAT};
