import {Shop} from "../../types/data.ts";
import {Area, Item, Unit} from "../../types/enums.ts";

export const restaurants: Shop[] = [
  {
    "name": "Brisa Marina",
    "area": Area.ARCHI,
    "location": {x: 0.47172, y: 0.882158},
    "check-possible": false,
    "discounts": [0.0],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [6],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10],
      },
    ],
  },
  {
    "name": "Cerveza en la Playa",
    "area": Area.CALLEJON,
    "location": {x: 0.544502, y: 0.726813},
    "check-possible": false,
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10, 30],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10, 20],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [6, 10],
      },
    ],
  },
  {
    "name": "La Guarida",
    "area": Area.CALLEJON,
    "location": {x: 0.516865, y: 0.702614},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [6],
      },
    ],
  },
  {
    "name": "Cerveza Josué",
    "area": Area.JUNGLE,
    "location": {x: 0.541755, y: 0.628281},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [5],
      },
    ],
  },
  {
    "name": "Sodoma i Gomora",
    "area": Area.SLAVS_BAY,
    "location": {x: 0.417477, y: 0.537472},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [10],
      },
    ],
  },
  {
    "name": "Perla de la Costa",
    "area": Area.PENINSULAR,
    "location": {x: 0.265216, y: 0.582106},
    "check-possible": false,
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 700,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [60, 80, 100],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 1000,
        "quantity": [50, 70, 100],
      },
      {
        "name": Item.BEER,
        "price": 800,
        "quantity": [100, 150, 200],
      },
    ],
  }, // Finished
  {
    "name": "El Sueno Morado",
    "area": Area.PENINSULAR,
    "location": {x: 0.261611, y: 0.620733},
    "check-possible": false,
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [5],
      },
    ],
  },
  {
    "name": "El Hueco Bar",
    "area": Area.PENINSULAR,
    "location": {x: 0.268306, y: 0.651282},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [5],
      },
      {
        "name": Item.LIMONADA_DE_COCO,
        "price": 700,
        "quantity": [10],
      },
      {
        "name": Item.BEER,
        "price": 700,
        "quantity": [10],
      },
      {
        "name": Item.SAUSAGE,
        "price": 600,
        "quantity": [5],
      },
    ],
  },
]