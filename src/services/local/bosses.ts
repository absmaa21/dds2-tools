import {Boss} from "../../types/data.ts";
import {Area, Item} from "../../types/enums.ts";

export const bosses: Boss[] = [
  {
    "name": "Llanzo Jean-Louis",
    "area": Area.ARCHI,
    "location": {x: 0.46966, y: 0.951346},
    "xp-level": [0, 250, 550, 1100, 1950], // level 3 unsure
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 250,
        "price-per-g": 1900,
      },
      {
        "name": Item.AMP,
        "amount": 75, // probably *2
        "price-per-g": 2500,
      },
      {
        "name": Item.METH,
        "amount": 50, // probably *2
        "price-per-g": 3000,
      },
    ],
  },
  {
    "name": "Pedro Alvarez",
    "area": Area.CALLEJON,
    "location": {x: 0.561667, y: 0.69935},
    "xp-level": [200, 700, -1, 2600], // level 1 unsure
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 250,
        "price-per-g": 1500,
      },
      {
        "name": Item.AMP,
        "amount": 300,
        "price-per-g": 2000,
      },
      {
        "name": Item.METH,
        "amount": 75, // probably *2
        "price-per-g": 3000,
      },
      {
        "name": Item.OPIUM,
        "amount": 50, // probably *2
        "price-per-g": 2200,
      },
    ],
  },
  {
    "name": "Diego Herrera",
    "area": Area.JUNGLE,
    "location": {x: 0.595483, y: 0.650768},
    "xp-level": [0, 400],
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 100,
        "price-per-g": 2000,
      },
      {
        "name": Item.AMP,
        "amount": 135,
        "price-per-g": 2000,
      },
      {
        "name": Item.METH,
        "amount": 150,
        "price-per-g": 3000,
      },
      {
        "name": Item.OPIUM,
        "amount": 50,
        "price-per-g": 2200,
      },
      {
        "name": Item.SHROOMS,
        "amount": -1,
        "price-per-g": 2500,
      },
      {
        "name": Item.COCS,
        "amount": -1,
        "price-per-g": 6000,
      },
    ],
  },
  {
    "name": "Kira",
    "area": Area.SLAVS_BAY,
    "location": {x: 0.417992, y: 0.539531},
    "xp-level": [-1, 900, -1, 3800],
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 175,
        "price-per-g": 1500,
      },
      {
        "name": Item.AMP,
        "amount": 150,
        "price-per-g": 2000,
      },
      {
        "name": Item.METH,
        "amount": 275,
        "price-per-g": 3000,
      },
      {
        "name": Item.OPIUM,
        "amount": 100,
        "price-per-g": 2100,
      },
    ],
  },
  {
    "name": 'Leonardo "Chief" Zapata',
    "area": Area.BAHIA_FAVELA,
    "location": {x: 0.376279, y: 0.201005},
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 100,
        "price-per-g": 2700,
      },
      {
        "name": Item.AMP,
        "amount": 125,
        "price-per-g": 3200,
      },
      {
        "name": Item.METH,
        "amount": 50,
        "price-per-g": 4000,
      },
      {
        "name": Item.COCS,
        "amount": 150,
        "price-per-g": 7000,
      },
    ],
  },
]