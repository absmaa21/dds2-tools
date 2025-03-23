import {Item} from "../../types/enums.ts";
import {Tool} from "../../types/data.ts";


export const tools: Map<Item, Tool> = new Map<Item, Tool>([
  [Item.SMALL_FLASHLIGHT, {
    "power": 30,
    "range": 14.0,
  }],
  [Item.FLASHLIGHT, {
    "power": 50,
    "range": 22.0,
  }],
  [Item.HID_FLASHLIGHT, {
    "power": 100,
    "range": 40.0,
  }],
  [Item.WIRE_CUTTERS, {
    "hp": 70,
  }],
])