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
        "amount": 150,
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
        "amount": 80,
        "price-per-g": 2500,
      },
      {
        "name": Item.COCAINE,
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
        "amount": 350,
        "price-per-g": 1500,
      },
      {
        "name": Item.AMP,
        "amount": 300,
        "price-per-g": 2000,
      },
      {
        "name": Item.METH,
        "amount": 275,
        "price-per-g": 3000,
      },
      {
        "name": Item.OPIUM,
        "amount": 200,
        "price-per-g": 2100,
      },
      {
        "name": Item.SHROOMS,
        "amount": 100,
        "price-per-g": 2500,
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
        "name": Item.COCAINE,
        "amount": 150,
        "price-per-g": 7000,
      },
    ],
  },
  {
    "name": "Malik James", // every 4 ingame minute --> 0.1 xp lose
    "area": Area.SANGRIENTA,
    "location": {x: 0.586728, y: 0.409927},
    "xp-level": [-1, 1000],
    "unlock-description": "Let Benita's brother die",
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": -1,
        "price-per-g": 1500,
      },
      {
        "name": Item.AMP,
        "amount": -1,
        "price-per-g": 2000,
      },
      {
        "name": Item.OPIUM,
        "amount": -1,
        "price-per-g": 2400,
      },
      {
        "name": Item.SHROOMS,
        "amount": -1,
        "price-per-g": 2600,
      },
    ],
  },
  {
    "name": "Priest (Reverend Mateo De Víbora)", // every 3 ingame minutes --> 0.1 xp lose
    "area": Area.DUENO_DEL_MAR,
    "location": {x: 0.386578, y: 0.383149},
    "xp-level": [-1, -1, 2000],
    "unlock-description": "Let Benita's brother die",
    "demands": [
      {
        "name": Item.WEED_INDICA,
        "amount": 150,
        "price-per-g": 1500,
      },
      {
        "name": Item.AMP,
        "amount": -1,
        "price-per-g": 2500,
      },
      {
        "name": Item.OPIUM,
        "amount": -1,
        "price-per-g": 2200,
      },
      {
        "name": Item.COCAINE,
        "amount": -1,
        "price-per-g": 7000,
      },
      {
        "name": Item.LSD,
        "amount": -1,
        "price-per-g": 42000,
      },
    ],
  },
]