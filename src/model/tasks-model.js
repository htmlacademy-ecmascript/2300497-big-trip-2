import { destinations } from '../mock/destinations.js';
import { offers } from '../mock/offers.js';
import { getRandomPoints } from '../mock/points.js';


const POINT_COUNT = 3;

export default class TaskModel {
  point = Array.from({length: POINT_COUNT}, getRandomPoints);
  offers = offers;
  destination = destinations;

  getPoint() {
    return this.point;
  }

  getOffer () {
    return this.offers;
  }

  getOfferByType(type) {
    const allOffers = this.getOffer();
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOfferByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) =>item.id === type));
  }

  getDestination() {
    return this.destination;
  }

  getDestinationById(id) {
    const allDestination = this.getDestination();
    return allDestination.find((item) => item.id === id);
  }
}
