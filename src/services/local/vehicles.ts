import {Item} from "../../types/enums.ts";
import {Vehicle} from "../../types/data.ts";

export const vehicles: Map<Item, Vehicle> = new Map<Item, Vehicle>([
  [Item.LUXURY_MOTORBOAT, {
    "fuel-usage": 2.7,
    "tank-capacity": 20,
    "seats": 4,
    "inventory-space": 5,
    "speed": 97,
  }],
  [Item.CABALLO_DEL_MAR, {
    "fuel-usage": 10,
    "tank-capacity": 500,
    "seats": 4,
    "inventory-space": 10,
    "speed": 50,
  }],
  [Item.BONG_VOYAGE, {
    "fuel-usage": 100,
    "tank-capacity": 2000,
    "seats": 4,
    "inventory-space": 30,
    "speed": 50,
  }],
])