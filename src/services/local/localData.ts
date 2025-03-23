import {Data} from "../../types/data.ts";
import {hideouts} from "./hideouts.ts";
import {shops} from "./shops.ts";
import {equipShops} from "./equip-shops.ts";
import {pawnShops} from "./pawn-shops.ts";
import {anchorSpots} from "./anchor-spots.ts";
import {bosses} from "./bosses.ts";
import {clothShops} from "./cloth-shops.ts";
import {restaurants} from "./restaurants.ts";
import {dealerSpots} from "./dealer-spots.ts";
import {medicPoints} from "./medic-points.ts";


const localData: Data = {
  "last-update": 1742742905000,
  "version": 7,
  "game-version": "1.0.13",
  "hideouts": hideouts,
  "shops": shops,
  "equip-shops": equipShops,
  "pawn-shops": pawnShops,
  "anchor-spots": anchorSpots,
  "bosses": bosses,
  "cloth-shops": clothShops,
  "restaurants": restaurants,
  "dealer-spots": dealerSpots,
  "medic-points": medicPoints,
}

export default localData
