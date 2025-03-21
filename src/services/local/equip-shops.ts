import {Shop} from "../../types/data.ts";
import {Area, Item} from "../../types/enums.ts";

export const equipShops: Shop[] = [
  {
    "name": "Elvin Garcia",
    "area": Area.ARCHI,
    "check-possible": false,
    "location": {x: 0.549651, y: 0.939678},
    "discounts": [0.0, 0.1, 0.15, 0.2],
    "furnitures": [
      {
        "name": Item.SMALL_CONTAINER,
        "price": 300,
        "quantity": [10, -1, -1, 30],
      },
      {
        "name": Item.MEDIUM_CONTAINER,
        "price": 500,
        "quantity": [5, -1, -1, 13],
      },
      {
        "name": Item.LARGE_CONTAINER,
        "price": 900,
        "quantity": [2, -1, -1, 4],
      },
      {
        "name": Item.LABORATORY_CABINET,
        "price": 5000,
        "quantity": [1, -1, -1, 2],
      },
    ],
    "equipments": [
      {
        "name": Item.LABORATORY_TRAY,
        "price": 3000,
        "quantity": [2, -1, -1, 4],
      },
      {
        "name": Item.MORTAR,
        "price": 4000,
        "quantity": [1, -1, -1, 3],
      },
      {
        "name": Item.DRYING_RACK,
        "price": 7000,
        "quantity": [1, -1, -1, 3],
      },
      {
        "name": Item.HYBRID_DRYER,
        "price": 46000,
        "quantity": [2, -1, -1, 4],
      },
      {
        "name": Item.GROWBOX,
        "price": 32000,
        "quantity": [1, -1, -1, 3],
      },
      {
        "name": Item.RACK,
        "price": 34000,
        "quantity": [1, -1, -1, 3],
      },
      {
        "name": Item.SEEDLING_BOX,
        "price": 3000,
        "quantity": [0, 0, -1, 2],
      },
      {
        "name": Item.KITCHEN_STOVE,
        "price": 20000,
        "quantity": [0, 0, -1, 2],
      },
      {
        "name": Item.ELECTRIC_PRESSURE_COOKER,
        "price": 11000,
        "quantity": [0, 0, -1, 2],
      },
      {
        "name": Item.SMALL_FERMENTATION_VAT,
        "price": 11000,
        "quantity": [1, -1, -1, 2],
      },
      {
        "name": Item.BUCKET,
        "price": 2000,
        "quantity": [1, -1, -1, 2],
      },
    ],
  },
  {
    "name": "Watto",
    "area": Area.ARCHI,
    "check-possible": true,
    "location": {x: 0.460391, y: 0.797539},
    "discounts": [0.0, 0.1],
    "furnitures": [
      {
        "name": Item.SHELF,
        "price": 2000,
        "quantity": [5],
      },
      {
        "name": Item.CHAIR,
        "price": 3000,
        "quantity": [6],
      },
      {
        "name": Item.ARMCHAIR,
        "price": 7000,
        "quantity": [3],
      },
      {
        "name": Item.SOFA,
        "price": 12000,
        "quantity": [3],
      },
      {
        "name": Item.BED,
        "price": 8000,
        "quantity": [3],
      },
      {
        "name": Item.DOUBLE_BED,
        "price": 16000,
        "quantity": [1],
      },
      {
        "name": Item.WARDROBE,
        "price": 10000,
        "quantity": [1],
      },
      {
        "name": Item.BACKPACK_HANGER,
        "price": 4000,
        "quantity": [2],
      },
      {
        "name": Item.DESK,
        "price": 5500,
        "quantity": [2],
      },
      {
        "name": Item.TABLE,
        "price": 6000,
        "quantity": [3],
      },
      {
        "name": Item.INDUSTRIAL_TABLE,
        "price": 7000,
        "quantity": [2],
      },
      {
        "name": Item.CABINET,
        "price": 4500,
        "quantity": [3],
      },
      {
        "name": Item.METAL_CABINET,
        "price": 6000,
        "quantity": [2],
      },
      {
        "name": Item.DRESSER,
        "price": 9000,
        "quantity": [2],
      },
      {
        "name": Item.BOOKSHELF,
        "price": 5000,
        "quantity": [2],
      },
      {
        "name": Item.RETRO_RADIO,
        "price": 11000,
        "quantity": [2],
      },
      {
        "name": Item.PET_BED,
        "price": 5000,
        "quantity": [2],
      },
      {
        "name": Item.SMALL_SAFE,
        "price": 32000,
        "quantity": [3],
      },
      {
        "name": Item.DOOR_LOCK,
        "price": 6000,
        "quantity": [1],
      },
      {
        "name": Item.CEILING_LAMP,
        "price": 3000,
        "quantity": [6],
      },
      {
        "name": Item.DESK_LAMP,
        "price": 3000,
        "quantity": [6],
      },
      {
        "name": Item.FLOOR_LAMP,
        "price": 3000,
        "quantity": [6],
      },
      {
        "name": Item.PAINTING,
        "price": 4000,
        "quantity": [6],
      },
      {
        "name": Item.POTTED_PLANT,
        "price": 3000,
        "quantity": [5],
      },
      {
        "name": Item.CACTUS_SCULPTURE,
        "price": 2000,
        "quantity": [3],
      },
      {
        "name": Item.CACTUS_SCULPTURE,
        "price": 2000,
        "quantity": [3],
      },
      {
        "name": Item.CACTUS_SCULPTURE,
        "price": 2000,
        "quantity": [3],
      },
    ],
  },
  {
    "name": "Watto",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.382802, y: 0.626392},
    "discounts": [0.0, 0.1, 0.15],
    "furnitures": [
      {
        "name": Item.SMALL_BARREL,
        "price": 1200,
        "quantity": [2, 3],
      },
      {
        "name": Item.MEDIUM_BARREL,
        "price": 2500,
        "quantity": [2, 3],
      },
      {
        "name": Item.LARGE_BARREL,
        "price": 6000,
        "quantity": [2, 3],
      },
      {
        "name": Item.SMALL_SAFE,
        "price": 35000,
        "quantity": [3, 3],
      },
      {
        "name": Item.SAFE,
        "price": 250000,
        "quantity": [1, 1],
      },
      {
        "name": Item.WINDOW_BARS,
        "price": 4500,
        "quantity": [5, 8],
      },
      {
        "name": Item.WINDOW_SHUTTERS,
        "price": 4200,
        "quantity": [4, 7],
      },
      {
        "name": Item.DOOR_LOCK,
        "price": 6000,
        "quantity": [3, 5],
      },
      {
        "name": Item.LARGE_DOOR_LOCK,
        "price": 8900,
        "quantity": [2, 3],
      },
    ],
    "equipments": [
      {
        "name": Item.LABORATORY_TRAY,
        "price": 3000,
        "quantity": [2, 2],
      },
      {
        "name": Item.COFFEE_GRINDER,
        "price": 9000,
        "quantity": [0, 1],
      },
      {
        "name": Item.ELECTRIC_PRESSURE_COOKER,
        "price": 32500,
        "quantity": [2, 3],
      },
      {
        "name": Item.LABORATORY_AUTOCLAVE,
        "price": 65000,
        "quantity": [1, 2],
      },
      {
        "name": Item.LABORATORY_WATER_BATH,
        "price": 110000,
        "quantity": [1, 1],
      },
      {
        "name": Item.LABORATORY_ICE_BATH,
        "price": 190000,
        "quantity": [0, 1],
      },
      {
        "name": Item.LABORATORY_CENTRIFUGE,
        "price": 140000,
        "quantity": [1, 1],
      },
      {
        "name": Item.LABORATORY_OVEN,
        "price": 95000,
        "quantity": [0, 1],
      },
      {
        "name": Item.HOMEMADE_SOAKING_VAT,
        "price": 12000,
        "quantity": [1, 2],
      },
      {
        "name": Item.GROWBOX,
        "price": 33000,
        "quantity": [1, 3],

      },
      {
        "name": Item.BUCKET,
        "price": 1000,
        "quantity": [2, 3],
      },
    ],
  },
  {
    "name": "Ghetto equipment store",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.409066, y: 0.546062},
    "discounts": [0.0, 0.1],
    "furnitures": [
      {
        "name": Item.SMALL_CONTAINER,
        "price": 300,
        "quantity": [15],
      },
      {
        "name": Item.MEDIUM_CONTAINER,
        "price": 500,
        "quantity": [10],
      },
      {
        "name": Item.LARGE_CONTAINER,
        "price": 900,
        "quantity": [5],
      },
      {
        "name": Item.SMALL_BARREL,
        "price": 1200,
        "quantity": [2],
      },
      {
        "name": Item.MEDIUM_BARREL,
        "price": 2500,
        "quantity": [1],
      },
    ],
    "equipments": [
      {
        "name": Item.LABORATORY_TRAY,
        "price": 3000,
        "quantity": [2],
      },
      {
        "name": Item.KITCHEN_STOVE,
        "price": 25000,
        "quantity": [2],
      },
      {
        "name": Item.ELECTRIC_PRESSURE_COOKER,
        "price": 32500,
        "quantity": [1],
      },
      {
        "name": Item.LABORATORY_AUTOCLAVE,
        "price": 65000,
        "quantity": [1],
      },
      {
        "name": Item.LABORATORY_WATER_BATH,
        "price": 110000,
        "quantity": [1],
      },
      {
        "name": Item.LABORATORY_CENTRIFUGE,
        "price": 140000,
        "quantity": [1],
      },
      {
        "name": Item.DRYING_RACK,
        "price": 11000,
        "quantity": [3],
      },
      {
        "name": Item.DRYING_OUTDOOR_RACK,
        "price": 23000,
        "quantity": [2],
      },
      {
        "name": Item.HYBRID_DRYER,
        "price": 48000,
        "quantity": [2],
      },
      {
        "name": Item.BUCKET,
        "price": 1000,
        "quantity": [2],
      },
      {
        "name": Item.SMALL_FERMENTATION_VAT,
        "price": 12000,
        "quantity": [1],
      },
      {
        "name": Item.HOMEMADE_SOAKING_VAT,
        "price": 42000,
        "quantity": [1],
      },
      {
        "name": Item.GROWBOX,
        "price": 33000,
        "quantity": [1],
      },
      {
        "name": Item.RACK,
        "price": 35500,
        "quantity": [2],
      },
      {
        "name": Item.SEEDLING_BOX,
        "price": 3000,
        "quantity": [1],
      },
    ],
  },
  {
    "name": "Ghetto equipment store",
    "area": Area.SANGRIENTA,
    "check-possible": false,
    "location": {x: 0.553256, y: 0.413876},
    "discounts": [0.0, 0.1, 0.15, 0.2],
    "furnitures": [
      {
        "name": Item.SMALL_CONTAINER,
        "price": 300,
        "quantity": [-1, 20, 30, 40],
      },
      {
        "name": Item.MEDIUM_CONTAINER,
        "price": 500,
        "quantity": [-1, 15, 20, 30],
      },
      {
        "name": Item.LARGE_CONTAINER,
        "price": 900,
        "quantity": [-1, 8, 10, 12],
      },
      {
        "name": Item.SMALL_BARREL,
        "price": 2000,
        "quantity": [2, 5, 8, 10],
      },
      {
        "name": Item.MEDIUM_BARREL,
        "price": 3500,
        "quantity": [1, 3, 5, 7],
      },
      {
        "name": Item.LARGE_BARREL,
        "price": 7000,
        "quantity": [1, 2, 3, 4],
      },
      {
        "name": Item.SMALL_SAFE,
        "price": 34000,
        "quantity": [-1, 10, 15, 18],
      },
      {
        "name": Item.SAFE,
        "price": 240000,
        "quantity": [-1, 8, 13, 15],
      },
      {
        "name": Item.LARGE_SAFE,
        "price": 600000,
        "quantity": [-1, 2, 3, 4],
      },
      {
        "name": Item.WINDOW_BARS,
        "price": 4500,
        "quantity": [-1, 8, 10, 15],
      },
      {
        "name": Item.WINDOW_SHUTTERS,
        "price": 4000,
        "quantity": [-1, 8, 10, 15],
      },
      {
        "name": Item.DOOR_LOCK,
        "price": 6000,
        "quantity": [-1, 7, 10, 12],
      },
      {
        "name": Item.LARGE_DOOR_LOCK,
        "price": 8500,
        "quantity": [-1, 4, 5, 6],
      },
      {
        "name": Item.LABORATORY_CABINET,
        "price": 5000,
        "quantity": [-1, 4, 5, 6],
      },
      {
        "name": Item.LARGE_LABORATORY_CABINET,
        "price": 19000,
        "quantity": [-1, 3, 5, 6],
      },
    ],
    "equipments": [
      {
        "name": Item.LABORATORY_TRAY,
        "price": 3000,
        "quantity": [-1, 3, 4, 5],
      },
      {
        "name": Item.MORTAR,
        "price": 4000,
        "quantity": [-1, 4, 5, 5],
      },
      {
        "name": Item.COFFEE_GRINDER,
        "price": 8000,
        "quantity": [-1, 3, 5, 5],
      },
      {
        "name": Item.KITCHEN_STOVE,
        "price": 22000,
        "quantity": [-1, 4, 5, 5],
      },
      {
        "name": Item.ELECTRIC_PRESSURE_COOKER,
        "price": 30000,
        "quantity": [-1, 3, 4, 5],
      },
      {
        "name": Item.LABORATORY_AUTOCLAVE,
        "price": 65000,
        "quantity": [-1, 3, 4, 4],
      },
      {
        "name": Item.LABORATORY_WATER_BATH,
        "price": 110000,
        "quantity": [-1, 2, 3, 3],
      },
      {
        "name": Item.LABORATORY_ICE_BATH,
        "price": 190000,
        "quantity": [0, 1, 1, 2],
      },
      {
        "name": Item.LABORATORY_CENTRIFUGE,
        "price": 140000,
        "quantity": [-1, 2, 3, 3],
      },
      {
        "name": Item.LABORATORY_ORBITAL_SHAKER,
        "price": 250000,
        "quantity": [0, 1, 2, 2],
      },
      {
        "name": Item.DRYING_RACK,
        "price": 7000,
        "quantity": [-1, 5, 6, 6],
      },
      {
        "name": Item.DRYING_OUTDOOR_RACK,
        "price": 21000,
        "quantity": [-1, 5, 7, 7],
      },
      {
        "name": Item.HYBRID_DRYER,
        "price": 46000,
        "quantity": [-1, 4, 5, 5],
      },
      {
        "name": Item.LABORATORY_OVEN,
        "price": 95000,
        "quantity": [0, 1, 2, 2],
      },
      {
        "name": Item.LARGE_DRYING_TABLE,
        "price": 55000,
        "quantity": [0, 0, 1, 1],
      },
      {
        "name": Item.BUCKET,
        "price": 2000,
        "quantity": [-1, 3, 4, 5],
      },
      {
        "name": Item.OLD_BARREL,
        "price": 4000,
        "quantity": [-1, 2, 3, 4],
      },
      {
        "name": Item.KITCHEN_MIXER,
        "price": 18000,
        "quantity": [-1, 2, 3, 3],
      },
      {
        "name": Item.SMALL_FERMENTATION_VAT,
        "price": 11000,
        "quantity": [-1, -1, 6, 7],
      },
      {
        "name": Item.HOMEMADE_SOAKING_VAT,
        "price": 40000,
        "quantity": [-1, 3, 4, 5],
      },
      {
        "name": Item.GROWBOX,
        "price": 32000,
        "quantity": [-1, 3, 5, 6],
      },
      {
        "name": Item.RACK,
        "price": 35500,
        "quantity": [-1, 4, 5, 6],
      },
      {
        "name": Item.SEEDLING_BOX,
        "price": 3000,
        "quantity": [-1, 5, 6, 7],
      },
      {
        "name": Item.OUTDOOR_POT_BOX,
        "price": 15000,
        "quantity": [-1, 3, 4, 5],
      },
      {
        "name": Item.PLASTIC_BOX,
        "price": 4000,
        "quantity": [-1, 2, 3, 4],
      },
    ],
  },
]