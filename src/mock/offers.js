import { getRandomArrayElement } from "../utils.js";

const offers = [
  {
    type: "taxi",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ],
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ],
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Bus",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Train",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Ship",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Drive",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Flight",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Check-in",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Sightseeing",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
  {
    type: "Restaurant",
    offers: [
      {
        id: "b4c3e4e6-9053-42ce-b747-e281314baa31",
        title: "Upgrade to a business class",
        price: 120
      }
    ]
  },
];

function getRandomOffers () {
  return getRandomArrayElement(offers);
}

export {getRandomOffers};
