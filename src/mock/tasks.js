import { getRandomArrayElement } from '../utils.js';

const DESTINATIONS = [
  {
    id: 1,
    name: 'Paris',
    description: 'A beautiful city with an Eiffel Tower and exquisite cuisine.',
    pictures: [
      { src: 'img/photo1.jpg', description: 'Eiffel Tower' },
      { src: 'img/photo2.jpg', description: 'Seine River' }
    ],
  },
  {
    id: 2,
    name: 'London',
    description: 'A city known for its rich history and Big Ben.',
    pictures: [
      { src: 'img/photo3.jpg', description: 'Big Ben' },
      { src: 'img/photo4.jpg', description: 'London Bridge' }
    ],
  },
];

const OPTIONS = [
  { id: 1, type: 'luggage', title: 'Add luggage', price: 30 },
  { id: 2, type: 'meal', title: 'Add meal', price: 15 },
  { id: 3, type: 'seats', title: 'Choose seats', price: 5 },

];

const POINT_TYPES = ['taxi', 'bus', 'train', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const mockTasks = Array.from({ length: 4 }, () => ({
  type: getRandomArrayElement(POINT_TYPES),
  destination: getRandomArrayElement(DESTINATIONS),
  options: [
    getRandomArrayElement(OPTIONS),
    getRandomArrayElement(OPTIONS)
  ],
  basePrice: Math.floor(Math.random() * 500) + 50,
  dateFrom: new Date(),
  dateTo: new Date(Date.now() + Math.random() * 100000000),
}));

function getRandomTask() {
  return {
    id: Math.floor(Math.random() * 1000),
    title: `Task ${Math.floor(Math.random() * 100)}`,
    description: `Description ${Math.floor(Math.random() * 100)}`,
  };
}

export { getRandomTask, mockTasks };
