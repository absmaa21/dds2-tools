import {Weapon} from "../../types/data.ts";
import {Item} from "../../types/enums.ts";

export const weapons: Map<Item, Weapon> = new Map<Item, Weapon>([
  [Item.HAMMER, {
    "damage": 15,
    "bleed-chance": 0.03,
    "stun-chance": 0.2,
    "sus": +5,
    "concealed": true,
  }],
  [Item.CROWBAR, {
    "damage": 19,
    "bleed-chance": 0.03,
    "stun-chance": 0.2,
    "sus": +15,
  }],
  [Item.SHOVEL, {
    "damage": 14,
    "stun-chance": 0.2,
    "sus": +10,
  }],
  [Item.BOLT_CUTTER, {
    "damage": 16,
    "bleed-chance": 0.01,
    "stun-chance": 0.2,
    "sus": +12,
  }],
  [Item.MILITARY_KNIFE, {
    "damage": 18,
    "bleed-chance": 0.42,
    "sus": +20,
    "concealed": true,
  }],
  [Item.MACHETE, {
    "damage": 26,
    "bleed-chance": 0.5,
    "sus": +30,
  }],
])