import {Shop} from "../../types/data.ts";
import {Area, Item, Unit} from "../../types/enums.ts";

export const shops: Shop[] = [
  // Small Island
  {
    "name": "Shop",
    "area": Area.SMALL_ISLAND,
    "check-possible": false,
    "location": {
      "x": 0.334738,
      "y": 0.883381
    },
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10, 30]
      },
      {
        "name": Item.SAUSAGE,
        "price": 500,
        "quantity": [5, 10]
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [5, 10]
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [1, 2]
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [15, 15]
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [100, 300]
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5, 5],
      }
    ]
  },
  {
    "name": "Marcus",
    "area": Area.SMALL_ISLAND,
    "check-possible": false,
    "location": {x: 0.323065, y: 0.944824},
    "discounts": [0.0, 0.1, 0.15, 0.2],
    "items": [
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50, 100, 150],
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [30, 50, 80],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [30, 50, 80],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.AMP,
        "price": 12000,
        "amount": 10,
        "unit": Unit.MASS,
        "quantity": [3, 5, 6],
      },
      {
        "name": Item.PHENYL,
        "price": 2400,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 12, 15],
      },
      {
        "name": Item.ACETIC_ACID,
        "price": 200,
        "amount": 100,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.AMP,
        "price": 61000,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [0, 1, 1],
      },
      {
        "name": Item.BLANK_BLOTTER,
        "price": 425,
        "quantity": [0, 0, 200],
      },
    ]
  },
  // Archipelago
  {
    "name": "General Store",
    "area": Area.ARCHI,
    "check-possible": false,
    "location": {
      "x": 0.477041,
      "y": 0.914439
    },
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [8, 12]
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": -1,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [0, 1]
      },
      {
        "name": Item.SAUSAGE,
        "price": 500,
        "quantity": [20, 30]
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [2]
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [25]
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500]
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [1]
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 1500,
        "quantity": [1]
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1]
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5]
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [1]
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10]
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500000,
        "unit": Unit.LIQUID,
        "quantity": [10]
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3]
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [20]
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100]
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80]
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000]
      }
    ]
  },
  {
    "name": "Botanist",
    "area": Area.ARCHI,
    "check-possible": false,
    "location": {"x": 0.550338, "y": 0.942071},
    "discounts": [0.0, 0.1, 0.15, 0.2],
    "items": [
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [100, 200, 300, 400]
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [2, 2, 3, 3]
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 8,
        "quantity": [40, 60, 80, 100]
      },
      {
        "name": Item.SEED_INDICA,
        "price": 3000,
        "quantity": [5, 7, 12, 15]
      },
      {
        "name": Item.WEED_INDICA,
        "price": 9000,
        "amount": 10,
        "unit": Unit.MASS,
        "quantity": [1, 2, 3, 4]
      },
      {
        "name": Item.UV_BULB_LARGE,
        "price": 9400,
        "quantity": [1, 2, 3, 3]
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [1, 2, 2, 3]
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [1, 2, 2, 3]
      },
      {
        "name": Item.EMPTY_GLASS_PIPE,
        "price": 5,
        "quantity": [10, 20, 30, 40]
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [10, 20, 30, 40]
      },
      {
        "name": Item.LED_BULB_SMALL,
        "price": 3700,
        "quantity": [0, 1, 1, 3]
      },
      {
        "name": Item.FAN,
        "price": 2250,
        "quantity": [0, 2, 3, 5]
      },
      {
        "name": Item.BLANK_BLOTTER,
        "price": 400,
        "quantity": [0, 0, 0, 10]
      },
    ]
  },
  {
    "name": "Fuel depot",
    "area": Area.ARCHI,
    "check-possible": true,
    "location": {x: 0.520985, y: 0.879266},
    "discounts": [0.0],
    "items": [
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [5],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [1],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [8],
      },
      {
        "name": Item.GASOLINE,
        "price": 16500,
        "amount": 11000,
        "unit": Unit.LIQUID,
        "quantity": [2],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 950,
        "quantity": [5],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [8],
      },
      {
        "name": Item.SIMPLE_MOTORBOAT,
        "price": 129000,
        "quantity": [1],
      },
      {
        "name": Item.RIB_MOTORBOAT,
        "price": 165000,
        "quantity": [1],
      },
    ]
  }, // Finished
  {
    "name": "Mechanic",
    "area": Area.ARCHI,
    "check-possible": true,
    "location": {x: 0.51635, y: 0.953064},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1, 2],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [1, 2],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [1, 2],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [1, 1],
      },
      {
        "name": Item.GASOLINE,
        "price": 16500,
        "amount": 11000,
        "unit": Unit.LIQUID,
        "quantity": [0, 1],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 950,
        "quantity": [8, 12],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [8, 12],
      },
    ]
  },
  // Callejon
  {
    "name": "Mini market",
    "area": Area.CALLEJON,
    "check-possible": true,
    "location": {x: 0.511544, y: 0.817107},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [8, 12, 18],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [50, 50, 50],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500, 1000, 1500],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [10, 10, 10],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 1500,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [3, 6, 9],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [0, 20, 30],
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500000,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [40, 60, 80],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100, 500, 1000],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80, 450, 950],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
      {
        "name": Item.EMPTY_GLASS_PIPE,
        "price": 4,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50, 100, 150],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.PACKET_SUGAR,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.PACKET_SALT,
        "price": 450,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 3200,
        "amount": 100,
        "unit": Unit.MASS,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.CACAO_POWDER,
        "price": 1500,
        "amount": 500,
        "unit": Unit.MASS,
        "quantity": [8, 12, 18],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.TABACCO_PACK,
        "price": 4500,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [3, 4, 7],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [1, 3, 5],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8750,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [3, 5, 9],
      },
      {
        "name": Item.COOKING_POT,
        "price": 2500,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4500,
        "quantity": [1, 1, 2],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 3500,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.MOBILE_PHONE,
        "price": 19000,
        "quantity": [0, 1, 2],
      },
    ]
  }, // Finished
  {
    "name": "Fuel depot",
    "area": Area.CALLEJON,
    "check-possible": true,
    "location": {x: 0.52562, y: 0.737114},
    "discounts": [0.0],
    "items": [
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [1],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.GASOLINE,
        "price": 16500,
        "amount": 11000,
        "unit": Unit.LIQUID,
        "quantity": [3],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 900,
        "quantity": [10],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [8],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [1],
      },
      {
        "name": Item.MAP,
        "price": 2500,
        "quantity": [2],
      },
    ]
  }, // Finished
  {
    "name": "Hardware store",
    "area": Area.CALLEJON,
    "check-possible": false,
    "location": {x: 0.531799, y: 0.698493},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.GLASSES,
        "price": 1100,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.BEANIE,
        "price": 400,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.BASEBALL_CAP,
        "price": 300,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.TSHIRT,
        "price": 450,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.PANTS,
        "price": 1500,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.SPORT_PANTS,
        "price": 1700,
        "quantity": [1, 1, 2],
      },
      {
        "name": Item.SWEATSHIRT,
        "price": 1850,
        "quantity": [1, 1, 2],
      },
      {
        "name": Item.SNEAKERS,
        "price": 2250,
        "quantity": [1, 2, 2],
      },
      {
        "name": Item.FANNYPACK,
        "price": 1100,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.BALACLAVA,
        "price": 1000,
        "quantity": [1, 2, 2],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [25, 25, 25],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500, 1000, 1500],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5, 5, 5],
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 1500,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2, 3, 3],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100, 500, 1000],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80, 450, 950],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [5, 100, 150],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 1000,
        "quantity": [8, 12, 18],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [8, 12, 18],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4000,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [1, 1, 2],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.MOBILE_PHONE,
        "price": 19000,
        "quantity": [1, 2, 2],
      },
      {
        "name": Item.FIRECRACKER,
        "price": 3000,
        "quantity": [3, 5, 9],
      },
      {
        "name": Item.MEDIUM_BACKPACK,
        "price": 3000,
        "quantity": [0, 1, 2],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [0, 4, 5],
      },
      {
        "name": Item.HID_FLASHLIGHT,
        "price": 5400,
        "quantity": [0, 1, 2],
      },
      {
        "name": Item.HAMMER,
        "price": 10000,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.CROWBAR,
        "price": 11000,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.SHOVEL,
        "price": 9000,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.BOLT_CUTTER,
        "price": 8000,
        "quantity": [0, 1, 2],
      },
      {
        "name": Item.KNIFE,
        "price": 15000,
        "quantity": [0, 1, 2],
      },
      {
        "name": Item.UV_BULB_LARGE,
        "price": 6400,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [0, 3, 4],
      },
    ]
  }, // Finished
  {
    "name": "General Store",
    "area": Area.CALLEJON,
    "check-possible": false,
    "location": {x: 0.515492, y: 0.69317},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [6, 10, 15],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5, 8, 12],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8700,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [4, 6, 8],
      },
      {
        "name": Item.TABACCO_PACK,
        "price": 4500,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [5, 8, 12],
      },
      {
        "name": Item.ACETONE,
        "price": 14000,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [0, 2, 3],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.COOKING_POT,
        "price": 3000,
        "quantity": [3, 5, 8],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.MAP,
        "price": 2000,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [100, 100, 100],
      },
      {
        "name": Item.BLANK_BLOTTER,
        "price": 500,
        "quantity": [-1, 10, 30],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [140, 160, 180],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [1000, 3000, 5000],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100, 500, 1000],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80, 450, 950],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5, 5, 5],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
      {
        "name": Item.FESTIVE_SPICE_PACK,
        "price": 550,
        "amount": 600,
        "unit": Unit.MASS,
        "quantity": [-1, 15, 20],
      },
    ]
  },
  // Farmers island
  {
    "name": "Farm Shop",
    "area": Area.FARMERS_ISLAND,
    "check-possible": false,
    "location": {x: 0.64715, y: 0.810239},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.UV_BULB_LARGE,
        "price": 9000,
        "quantity": [5],
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [5],
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [5],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [50],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8500,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [5],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [3],
      },
      {
        "name": Item.ERGOT_RYE,
        "price": 1600,
        "quantity": [50],
      },
      {
        "name": Item.SHOVEL,
        "price": 9000,
        "quantity": [1],
      },
      {
        "name": Item.PITCHFORK,
        "price": 10000,
        "quantity": [1],
      },
    ]
  },
  {
    "name": "Poppy store",
    "area": Area.FARMERS_ISLAND,
    "check-possible": false,
    "location": {x: 0.646806, y: 0.846119},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.POPPY_HEAD_YOUNG,
        "price": 550,
        "quantity": [100, 200, 300],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 3200,
        "amount": 100,
        "unit": Unit.MASS,
        "quantity": [30, 50, 70],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 31000,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8500,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [5, 8, 13],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [3, 5, 9],
      },
      {
        "name": Item.UV_BULB_LARGE,
        "price": 9000,
        "quantity": [5, 8, 10],
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.SHOVEL,
        "price": 9000,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.PITCHFORK,
        "price": 10000,
        "quantity": [1, 2, 3],
      },
    ]
  }, // Finished
  // Jungle
  {
    "name": "Hardware store",
    "area": Area.JUNGLE,
    "check-possible": false,
    "location": {x: 0.582094, y: 0.637036},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.COOKING_POT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.HAMMER,
        "price": 10000,
        "quantity": [1],
      },
      {
        "name": Item.CROWBAR,
        "price": 11000,
        "quantity": [2],
      },
      {
        "name": Item.WRENCH,
        "price": 14000,
        "quantity": [1],
      },
      {
        "name": Item.SHOVEL,
        "price": 9000,
        "quantity": [1],
      },
      {
        "name": Item.MULTITOOL,
        "price": 5300,
        "quantity": [1],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [1],
      },
      {
        "name": Item.BOLT_CUTTER,
        "price": 9000,
        "quantity": [1],
      },
      {
        "name": Item.KNIFE,
        "price": 15000,
        "quantity": [1],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4000,
        "quantity": [2],
      },
      {
        "name": Item.HID_FLASHLIGHT,
        "price": 5400,
        "quantity": [1],
      },
      {
        "name": Item.FIELD_BOOTS,
        "price": 8900,
        "quantity": [2],
      },
      {
        "name": Item.FANNYPACK,
        "price": 1000,
        "quantity": [3],
      },
      {
        "name": Item.MEDIUM_BACKPACK,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.ACETONE,
        "price": 7200,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.AMMONIA,
        "price": 6000,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.LED_BULB_SMALL,
        "price": 1650,
        "quantity": [4],
      },
      {
        "name": Item.LED_BULB_LARGE,
        "price": 3900,
        "quantity": [3],
      },
      {
        "name": Item.UV_BULB_LARGE,
        "price": 9400,
        "quantity": [5],
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [4],
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [5],
      },
      {
        "name": Item.FAN,
        "price": 2250,
        "quantity": [2],
      },
      {
        "name": Item.DISARMING_CARD,
        "price": 35000,
        "quantity": [1],
      },
      {
        "name": Item.FIRECRACKER,
        "price": 1000,
        "quantity": [10],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 1000,
        "quantity": [10],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [10],
      },
      {
        "name": Item.COMBAT_RATION,
        "price": 13000,
        "quantity": [10],
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [50],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [20],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [25],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000],
      },
    ],
  },
  {
    "name": "Moonshiner",
    "area": Area.JUNGLE,
    "check-possible": false,
    "location": {x: 0.533344, y: 0.6414999},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.ETHANOL,
        "price": 450,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [100],
      },
      {
        "name": Item.ACETIC_ACID,
        "price": 200,
        "amount": 100,
        "unit": Unit.LIQUID,
        "quantity": [50],
      },
      {
        "name": Item.ACETONE,
        "price": 12000,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
    ]
  },
  {
    "name": "Meth store",
    "area": Area.JUNGLE,
    "check-possible": false,
    "location": {x: 0.600117, y: 0.64785},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.METH,
        "price": 18000,
        "amount": 10,
        "unit": Unit.MASS,
        "quantity": [1, -1, 2, 3],
      },
      {
        "name": Item.EPHEDRINE,
        "price": 13500,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [5, -1, 10, 12],
      },
      {
        "name": Item.LODORIC_ACID,
        "price": 450,
        "amount": 100,
        "unit": Unit.LIQUID,
        "quantity": [10, -1, 20, 25],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, -1, 20, 25],
      }, {
        "name": Item.BLANK_BLOTTER,
        "price": 500,
        "quantity": [10, -1, 150, 150],
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [50, -1, 150, 150],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50, -1, 150, 150],
      },
    ]
  },
  {
    "name": "General store",
    "area": Area.JUNGLE,
    "check-possible": false,
    "location": {x: 0.514119, y: 0.599957},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [6],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10],
      },
      {
        "name": Item.PACKET_SALT,
        "price": 450,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5],
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.CACAO_POWDER,
        "price": 1250,
        "amount": 500,
        "unit": Unit.MASS,
        "quantity": [2],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 3200,
        "amount": 100,
        "unit": Unit.MASS,
        "quantity": [2],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [1],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [2],
      },
      {
        "name": Item.ANTIVENOM,
        "price": 10000,
        "quantity": [2],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.AMMONIA,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [3],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [3],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [2],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [1],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [3],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [2],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [25],
      },
      {
        "name": Item.BLANK_BLOTTER,
        "price": 500,
        "quantity": [10],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [20],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000],
      },
      {
        "name": Item.FESTIVE_SPICE_PACK,
        "price": 550,
        "amount": 600,
        "unit": Unit.MASS,
        "quantity": [10],
      },
    ]
  },
  {
    "name": "Senor Teo",
    "area": Area.JUNGLE,
    "check-possible": false,
    "location": {x: 0.588617, y: 0.608196},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.MAP,
        "price": 2000,
        "quantity": [1],
      },
    ]
  },
  // Slavs bay
  {
    "name": "Bogdan the mechanic",
    "area": Area.SLAVS_BAY,
    "check-possible": true,
    "location": {x: 0.327528, y: 0.628621},
    "discounts": [0.0, 0.05],
    "items": [
      {
        "name": Item.METAL_PARTS,
        "price": 950,
        "quantity": [15],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 1000,
        "quantity": [15],
      },
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.GASOLINE,
        "price": 16500,
        "amount": 11000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [2],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [1],
      },
      {
        "name": Item.CAR,
        "price": 300000,
        "quantity": [1],
      },
    ]
  },
  {
    "name": "General store",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.327356, y: 0.619695},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 2300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [6],
      },
      {
        "name": Item.TABACCO_PACK,
        "price": 4500,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [1],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [1],
      },
      {
        "name": Item.CACAO_POWDER,
        "price": 1250,
        "amount": 500,
        "unit": Unit.MASS,
        "quantity": [2],
      },
      {
        "name": Item.PACKET_SUGAR,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [2],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10],
      },
      {
        "name": Item.PACKET_SALT,
        "price": 450,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [2],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500000,
        "unit": Unit.LIQUID,
        "quantity": [10],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4000,
        "quantity": [1],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [2],
      },
      {
        "name": Item.GLASSES,
        "price": 1100,
        "quantity": [2],
      },
      {
        "name": Item.BASEBALL_CAP,
        "price": 300,
        "quantity": [2],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [3],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [2],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [25],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [40],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [500],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000],
      },
    ]
  },
  {
    "name": "Construction store",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.378339, y: 0.594292},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [1],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [10],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [5],
      },
      {
        "name": Item.AMMONIA,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [5],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [2],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [3],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [1],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [1000],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 3,
        "quantity": [100],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 5,
        "quantity": [100],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5],
      },
    ]
  },
  {
    "name": "Old lady",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.432411, y: 0.638772},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.POPPY_HEAD_YOUNG,
        "price": 500,
        "quantity": [6],
      },
      {
        "name": Item.MORNING_GLORY,
        "price": 800,
        "quantity": [2],
      },
      {
        "name": Item.ERGOT_RYE,
        "price": 1100,
        "quantity": [5],
      },
      {
        "name": Item.YEW_TREE_BRANCH,
        "price": 1300,
        "quantity": [5],
      },
    ]
  },
  {
    "name": "Fuel depot",
    "area": Area.SLAVS_BAY,
    "check-possible": true,
    "location": {x: 0.314825, y: 0.548459},
    "discounts": [0.0],
    "items": [
      {
        "name": Item.GASOLINE,
        "price": 6000,
        "amount": 4000,
        "unit": Unit.LIQUID,
        "quantity": [12],
      },
      {
        "name": Item.GASOLINE,
        "price": 16500,
        "amount": 4,
        "unit": Unit.LIQUID,
        "quantity": [4],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [1],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [1],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [1],
      },
      {
        "name": Item.METAL_PARTS,
        "price": 900,
        "quantity": [20],
      },
      {
        "name": Item.ELECTRIC_WIRES,
        "price": 900,
        "quantity": [20],
      },
      {
        "name": Item.MAP,
        "price": 2500,
        "quantity": [2],
      },
      {
        "name": Item.YACHT_SMALL,
        "price": 470000,
        "quantity": [1],
      },
      {
        "name": Item.MOTORBOAT,
        "price": 315000,
        "quantity": [1],
      },
    ]
  }, // Finished
  {
    "name": "Outdoor weed store",
    "area": Area.SLAVS_BAY,
    "check-possible": false,
    "location": {x: 0.376622, y: 0.576782},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.SEED_SATIVA,
        "price": 3000,
        "quantity": [5],
      },
      {
        "name": Item.WEED_SATIVA,
        "price": 12000,
        "amount": 10,
        "unit": Unit.MASS,
        "quantity": [1],
      },
      {
        "name": Item.LED_BULB_SMALL,
        "price": 3700,
        "quantity": [1],
      },
      {
        "name": Item.UV_BULB_LARGE,
        "price": 9400,
        "quantity": [1],
      },
      {
        "name": Item.HYDROPONIC_ELEMENTS,
        "price": 9000,
        "quantity": [2],
      },
      {
        "name": Item.FLOWER_POT,
        "price": 2000,
        "quantity": [3],
      },
      {
        "name": Item.FAN,
        "price": 2250,
        "quantity": [1],
      },
      {
        "name": Item.EMPTY_GLASS_PIPE,
        "price": 5,
        "quantity": [10],
      },
      {
        "name": Item.VIAL,
        "price": 2,
        "quantity": [50],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 4,
        "quantity": [40],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50],
      },
    ]
  },
  // Peninsular
  {
    "name": "Mini-market",
    "area": Area.PENINSULAR,
    "check-possible": true,
    "location": {x: 0.266246, y: 0.605793},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.PACKET_SUGAR,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.PACKET_SALT,
        "price": 450,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.CACAO_POWDER,
        "price": 1500,
        "amount": 500,
        "unit": Unit.MASS,
        "quantity": [8, 12, 18],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 3200,
        "amount": 100,
        "unit": Unit.MASS,
        "quantity": [4, 6, 8],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.AMMONIA,
        "price": 1700,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500000,
        "unit": Unit.LIQUID,
        "quantity": [10, 20, 30],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.TABACCO_PACK,
        "price": 4500,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [5, 10, 20],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [3, 6, 9],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8750,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [3, 6, 9],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [3, 5, 9],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.COOKING_POT,
        "price": 3000,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4000,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.MOBILE_PHONE,
        "price": 19000,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.GLASSES,
        "price": 1100,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.BASEBALL_CAP,
        "price": 300,
        "quantity": [2, 4, 5],
      },
      {
        "name": Item.TSHIRT,
        "price": 450,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.PANTS,
        "price": 1500,
        "quantity": [1, 2, 5],
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 1800,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [100, 150, 200],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [1000, 1500, 2000],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100, 500, 1000],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80, 450, 950],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [20, 20, 20],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [100, 100, 100],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
    ]
  }, // Finished
  {
    "name": "Pharmacy",
    "area": Area.PENINSULAR,
    "check-possible": false,
    "location": {x: 0.271911, y: 0.607851},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [10, 30],
      },
      {
        "name": Item.FIRST_AID_KIT,
        "price": 18000,
        "quantity": [3, 8],
      },
      {
        "name": Item.ANTIVENOM,
        "price": 10000,
        "quantity": [10, 20],
      },
      {
        "name": Item.BOTTLE_COUGH_SYRUP,
        "price": 1500,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 25],
      },
      {
        "name": Item.MIGRAINE_MEDICINE,
        "price": 2200,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [10, 25],
      },
      {
        "name": Item.MEDICARE_PACKAGE,
        "price": 24000,
        "quantity": [10, 25],
      },
      {
        "name": Item.EPHEDRINE,
        "price": 13500,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [5, 10],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [20, 40],
      },
      {
        "name": Item.PHENYL,
        "price": 2900,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [0, 9],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [0, 5],
      },
      {
        "name": Item.ACETONE,
        "price": 13500,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [0, 1],
      },
      {
        "name": Item.AMMONIA,
        "price": 1750,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [0, 6],
      },
      {
        "name": Item.AMMONIA,
        "price": 8750,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [0, 1],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [1, 9],
      },
      {
        "name": Item.METHANOL,
        "price": 17000,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [0, 2],
      },
      {
        "name": Item.EMPTY_LABELED_MEDICAL_VIAL,
        "price": 6,
        "quantity": [0, 50],
      },
      {
        "name": Item.EMPTY_LABELED_MEDICAL_BOX,
        "price": 10,
        "quantity": [0, 15],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5, 5],
      },
    ]
  },
  // Sangrienta
  {
    "name": "The baker",
    "area": Area.SANGRIENTA,
    "check-possible": false,
    "location": {x: 0.546733, y: 0.371113},
    "discounts": [0.0, 0.1, 0.15],
    "items": [
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.ERGOT_RYE,
        "price": 1100,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 31000,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.POPPY_HEAD_YOUNG,
        "price": 550,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.OPIUM,
        "price": 13200,
        "amount": 10,
        "unit": Unit.MASS,
        "quantity": [2, 3, 3],
      },
      {
        "name": Item.OPIUM,
        "price": 60000,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [0, 1, 2],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50, 100, 150],
      },
    ]
  },
  // Volcano Island
  // Dueno del mar
  {
    "name": "Pharmacy",
    "area": Area.DUENO_DEL_MAR,
    "check-possible": false,
    "location": {x: 0.376794, y: 0.402718},
    "discounts": [0.0, 0.1, 0.2],
    "items": [
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [12, 25, 30],
      },
      {
        "name": Item.FIRST_AID_KIT,
        "price": 18000,
        "quantity": [5, 8, 10],
      },
      {
        "name": Item.ANTIVENOM,
        "price": 10000,
        "quantity": [20, 30, 40],
      },
      {
        "name": Item.BOTTLE_COUGH_SYRUP,
        "price": 1500,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.MIGRAINE_MEDICINE,
        "price": 2200,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.EPHEDRINE,
        "price": 13500,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.PHENYL,
        "price": 2900,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.ERGOTAMINE,
        "price": 11000,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [1, 2, 3],
      },
      {
        "name": Item.MEDICARE_PACKAGE,
        "price": 24000,
        "quantity": [10, 15, 30],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [5, 5, 5],
      },
    ]
  },
  {
    "name": "Mini market",
    "area": Area.DUENO_DEL_MAR,
    "check-possible": true,
    "location": {x: 0.388638, y: 0.407351},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.WATER_BOTTLE_SMALL,
        "price": 300,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.WATER_BOTTLE_MEDIUM,
        "price": 1300,
        "amount": 5000,
        "unit": Unit.LIQUID,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.BEER,
        "price": 500,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.CHOCOLATE_BAR,
        "price": 300,
        "quantity": [30, 40, 60],
      },
      {
        "name": Item.PACKET_SUGAR,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.PACKET_FLOUR,
        "price": 550,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.PACKET_SALT,
        "price": 450,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.PACKET_SODA,
        "price": 700,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.CACAO_POWDER,
        "price": 1500,
        "amount": 500,
        "unit": Unit.MASS,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.POPPY_SEED_PACK,
        "price": 3200,
        "amount": 100,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.ACETONE,
        "price": 3000,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.AMMONIA,
        "price": 1700,
        "amount": 1000,
        "unit": Unit.LIQUID,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.METHANOL,
        "price": 1150,
        "amount": 300,
        "unit": Unit.LIQUID,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.ETHANOL,
        "price": 480,
        "amount": 200,
        "unit": Unit.LIQUID,
        "quantity": [30, 40, 50],
      },
      {
        "name": Item.VINEGAR,
        "price": 500,
        "amount": 500,
        "unit": Unit.LIQUID,
        "quantity": [20, 25, 30],
      },
      {
        "name": Item.CIGARETTE_PACK,
        "price": 3750,
        "quantity": [10, 15, 20],
      },
      {
        "name": Item.TABACCO_PACK,
        "price": 4500,
        "amount": 50,
        "unit": Unit.MASS,
        "quantity": [5, 10, 20],
      },
      {
        "name": Item.FERTILIZER,
        "price": 1200,
        "amount": 1000,
        "unit": Unit.MASS,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8750,
        "amount": 5000,
        "unit": Unit.MASS,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.FERTILIZER_SYNTHETIC,
        "price": 1200,
        "amount": 3000,
        "unit": Unit.MASS,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.KEYCHAIN,
        "price": 1500,
        "quantity": [3, 4, 5],
      },
      {
        "name": Item.COOKING_POT,
        "price": 3000,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 3000,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 4000,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.HID_FLASHLIGHT,
        "price": 6400,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.CROWBAR,
        "price": 6000,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 4500,
        "quantity": [2, 2, 3],
      },
      {
        "name": Item.MOBILE_PHONE,
        "price": 19000,
        "quantity": [2, 3, 4],
      },
      {
        "name": Item.MAP,
        "price": 2300,
        "quantity": [2, 4, 6],
      },
      {
        "name": Item.GLASSES,
        "price": 1100,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.BASEBALL_CAP,
        "price": 300,
        "quantity": [2, 4, 5],
      },
      {
        "name": Item.TSHIRT,
        "price": 450,
        "quantity": [2, 3, 5],
      },
      {
        "name": Item.PANTS,
        "price": 1500,
        "quantity": [1, 2, 5],
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 1800,
        "quantity": [3, 5, 7],
      },
      {
        "name": Item.BANDAGE,
        "price": 8000,
        "quantity": [5, 10, 15],
      },
      {
        "name": Item.BLANK_BLOTTER,
        "price": 500,
        "quantity": [100, 300, 500],
      },
      {
        "name": Item.ROLLING_PAPERS,
        "price": 10,
        "quantity": [100, 150, 200],
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [1000, 1500, 2000],
      },
      {
        "name": Item.DUCT_TAPE,
        "price": 5,
        "quantity": [100, 500, 1000],
      },
      {
        "name": Item.STRETCH_FOIL,
        "price": 10,
        "quantity": [80, 450, 950],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 250,
        "quantity": [20, 20, 20],
      },
      {
        "name": Item.BUS_TICKET,
        "price": 20,
        "quantity": [100, 100, 100],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
      {
        "name": Item.FESTIVE_SPICE_PACK,
        "price": 550,
        "amount": 600,
        "unit": Unit.MASS,
        "quantity": [10, 15, 20],
      },
    ]
  },
  {
    "name": "Military Equipment Shop",
    "area": Area.DUENO_DEL_MAR,
    "check-possible": true,
    "location": {x: 0.511544, y: 0.817107},
    "discounts": [0.0, 0.05, 0.1],
    "items": [
      {
        "name": Item.HAMMER,
        "price": 11000,
        "quantity": [-1, -1, 7],
      },
      {
        "name": Item.CROWBAR,
        "price": 12000,
        "quantity": [-1, -1, 7],
      },
      {
        "name": Item.SHOVEL,
        "price": 9000,
        "quantity": [-1, -1, 7],
      },
      {
        "name": Item.MULTITOOL,
        "price": 6000,
        "quantity": [-1, -1, 14],
      },
      {
        "name": Item.WIRE_CUTTERS,
        "price": 5000,
        "quantity": [-1, -1, 8],
      },
      {
        "name": Item.BOLT_CUTTER,
        "price": 9500,
        "quantity": [-1, -1, 9],
      },
      {
        "name": Item.MILITARY_KNIFE,
        "price": 21000,
        "quantity": [-1, -1, 4],
      },
      {
        "name": Item.MACHETE,
        "price": 26000,
        "quantity": [-1, -1, 4],
      },
      {
        "name": Item.SMALL_FLASHLIGHT,
        "price": 4000,
        "quantity": [-1, -1, 12],
      },
      {
        "name": Item.FLASHLIGHT,
        "price": 5000,
        "quantity": [-1, -1, 4],
      },
      {
        "name": Item.HID_FLASHLIGHT,
        "price": 6000,
        "quantity": [-1, -1, 4],
      },
      {
        "name": Item.FIELD_BOOTS,
        "price": 9900,
        "quantity": [-1, -1, 6],
      },
      {
        "name": Item.SMALL_BACKPACK,
        "price": 4000,
        "quantity": [-1, -1, 5],
      },
      {
        "name": Item.DUFFLE_BAG,
        "price": 6000,
        "quantity": [-1, -1, 4],
      },
      {
        "name": Item.LARGE_BACKPACK,
        "price": 10000,
        "quantity": [-1, -1, 5],
      },
      {
        "name": Item.FANNYPACK,
        "price": 1000,
        "quantity": [-1, -1, 5],
      },
      {
        "name": Item.DOG_TAG,
        "price": 3500,
        "quantity": [-1, -1, 5],
      },
      {
        "name": Item.MILITARY_JACKET,
        "price": 17000,
        "quantity": [-1, -1, 3],
      },
      {
        "name": Item.MILITARY_PANTS,
        "price": 14000,
        "quantity": [-1, -1, 3],
      },
      {
        "name": Item.MILITARY_BOOTS,
        "price": 11000,
        "quantity": [-1, -1, 3],
      },
      {
        "name": Item.MILITARY_CAP,
        "price": 5000,
        "quantity": [-1, -1, 3],
      },
      {
        "name": Item.GAS_MASK,
        "price": 45000,
        "quantity": [-1, -1, 2],
      },
      {
        "name": Item.COMBAT_RATION,
        "price": 13000,
        "quantity": [-1, -1, 30],
      },
      {
        "name": Item.PLASTIC_BAG,
        "price": 500,
        "quantity": [5, 5, 5],
      },
      {
        "name": Item.CASH_LARGE,
        "price": 1,
        "quantity": [100000, 200000, 300000],
      },
    ],
  },
  // Bahia - Downtown
  // Bahia - Favela
  // No Man's Land
  {
    "name": "The Herbalist",
    "area": Area.NO_MANS_LAND,
    "check-possible": false,
    "location": {x: 0.631014, y: 0.46898},
    "discounts": [0.0, 0.1],
    "items": [
      {
        "name": Item.POPPY_HEAD_YOUNG,
        "price": 550,
        "quantity": [10, 15],
      },
      {
        "name": Item.OPIUM,
        "price": 13200,
        "quantity": [1, 2],
        "amount": 10,
        "unit": Unit.MASS,
      },
      {
        "name": Item.PSILOCYBIN_MUSHROOMS_DIRTY,
        "price": 50,
        "quantity": [10, 30],
      },
      {
        "name": Item.MORNING_GLORY,
        "price": 800,
        "quantity": [6, 12],
      },
      {
        "name": Item.FERTILIZER,
        "price": 8500,
        "quantity": [5, 8],
        "amount": 5000,
        "unit": Unit.MASS,
      },
      {
        "name": Item.PLASTIC_BAGGIES,
        "price": 1,
        "quantity": [50, 100],
      },
      {
        "name": Item.OPIUM,
        "price": 66000,
        "quantity": [0, 1],
        "amount": 50,
        "unit": Unit.MASS,
      },
    ],
  }
]