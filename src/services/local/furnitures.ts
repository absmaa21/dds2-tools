import {Item} from "../../types/enums.ts";
import {Furniture} from "../../types/data.ts";

const furnitures: Record<Item, Furniture> = {
  [Item.SMALL_CONTAINER]: {
    "substance-storage": 750,
  },
  [Item.MEDIUM_CONTAINER]: {
    "substance-storage": 1500,
  },
  [Item.LARGE_CONTAINER]: {
    "substance-storage": 5000,
  },
  [Item.LABORATORY_CABINET]: {
    "slots": 8,
    "hideout-stash": 1,
  },
  [Item.SHELF]: {
    "hideout-stash": 1,
    "substance-storage": 500,
  },
  [Item.CHAIR]: {
    "comfort": 1,
  },
  [Item.ARMCHAIR]: {
    "comfort": 2,
  },
  [Item.SOFA]: {
    "comfort": 3,
  },
  [Item.BED]: {
    "comfort": 1,
  },
  [Item.DOUBLE_BED]: {
    "comfort": 2,
  },
  [Item.WARDROBE]: {
    "slots": 30,
    "hideout-stash": 1,
  },
  [Item.BACKPACK_HANGER]: {},
  [Item.DESK]: {},
  [Item.TABLE]: {},
  [Item.INDUSTRIAL_TABLE]: {},
  [Item.CABINET]: {
    "slots": 10,
    "hideout-stash": 1,
  },
  [Item.METAL_CABINET]: {
    "slots": 15,
  },
  [Item.DRESSER]: {
    "slots": 25,
    "hideout-stash": 2,
  },
  [Item.BOOKSHELF]: {
    "hideout-stash": 5,
    "substance-storage": 1500,
  },
  [Item.RETRO_RADIO]: {},
  [Item.PET_BED]: {},
  [Item.SMALL_SAFE]: {},
  [Item.DOOR_LOCK]: {
    "security": 7,
  },
  [Item.CEILING_LAMP]: {
    "comfort": 1,
  },
  [Item.DESK_LAMP]: {
    "comfort": 1,
  },
  [Item.FLOOR_LAMP]: {
    "comfort": 1,
  },
  [Item.PAINTING]: {
    "comfort": 1,
    "decoration": true,
  },
  [Item.POTTED_PLANT]: {
    "comfort": 2,
    "decoration": true,
  },
  [Item.CACTUS_SCULPTURE]: {
    "comfort": 1,
    "decoration": true,
  },
  [Item.SMALL_BARREL]: {
    "substance-storage": 10000,
  },
  [Item.MEDIUM_BARREL]: {
    "substance-storage": 20000,
    "visibility": 0.5,
  },
  [Item.LARGE_BARREL]: {
    "substance-storage": 50000,
    "visibility": 0.5,
  },
  [Item.SAFE]: {},
  [Item.WINDOW_BARS]: {
    "visibility": 0.5,
    "security": 2,
  },
  [Item.WINDOW_SHUTTERS]: {
    "visibility": -2,
    "security": 1,
    "blocks-grenades": true,
  },
  [Item.LARGE_DOOR_LOCK]: {
    "security": 15,
  },
  [Item.LARGE_LABORATORY_CABINET]: {
    "slots": 40,
    "hideout-stash": 1,
  }
}