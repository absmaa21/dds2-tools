import {Item} from "../../types/enums.ts";
import {Consumable} from "../../types/data.ts";

export const consumables: Map<Item, Consumable> = new Map<Item, Consumable>([
  [Item.BANDAGE, {
    "health": +5,
    "removes-bleeding": true,
  }],
])