import {Area, Item, Unit} from "./enums.ts";

export interface Marker {
  "name": string,
  "area": Area,
  "location": { x: number, y: number },
}

export interface Data {
  "last-update": number,
  "version": number,
  "game-version": string,
  "hideouts": Hideout[],
  "shops": Shop[],
  "equip-shops": Shop[],
  "pawn-shops": Shop[],
  "anchor-spots": Marker[],
  "bosses": Boss[],
  "cloth-shops": Shop[],
  "restaurants": Shop[],
  "dealer-spots": Marker[],
  "medic-points": MedicPoint[],
}

export interface Shop extends Marker {
  "check-possible": boolean,
  "discounts": number[],
  "items"?: ShopItem[],
  "furnitures"?: ShopItem[],
  "equipments"?: ShopItem[],
}

export type ShopItem = {
  "name": Item,
  "price": number,
  "quantity": number[],
} & (
  // Unit und Amount müssen co. existieren
  | { unit?: never; amount?: never }
  | { unit: Unit; amount: number }
  )

export interface Hideout extends Marker {
  "price": number,
  "visibility:": number,
  "security": number,
  "comfort": number,
  "running-water"?: boolean,
  "phoneline"?: boolean,
  "garden"?: boolean,
  "is_apartment"?: boolean,
  "parking-spot"?: boolean,
  "vault"?: boolean,
}

export interface Boss extends Marker {
  "demands": DrugDemand[],
  "xp-level"?: number[], // index eq. level
  "unlock-description"?: string,
}

export interface MedicPoint extends Marker {
  "price": number,
}

export interface DrugDemand {
  "name": string,
  "price-per-g": number,
  "amount": number,
}

export interface Furniture {
  visibility?: number,
  security?: number,
  comfort?: number,
  "blocks-grenades"?: boolean,
  "substance-storage"?: number,
  "hideout-stash"?: number,
  slots?: number,
  decoration?: boolean,
}

export interface Equipment extends Furniture {
  tier: number,
  "crafting-speed"?: number,
  "waste-amount"?: number,
  "production-cost"?: number,
  "energy-usage"?: number,
}

export interface Tool {
  hp?: number,
  power?: number,
  range?: number,
}

export interface Weapon {
  damage: number,
  "bleed-chance"?: number,
  "stun-chance"?: number,
  sus?: number,
  concealed?: boolean,
}

export interface Cloth {
  "hp"?: number,
  "agility"?: number,
  "visibility"?: number,
  "sus"?: number,
  "snake-proof"?: number,
  "swag"?: number,
  "slots"?: number,
  "quick-slots"?: number,
  "secret-slots"?: number,
  "comfort"?: number,
  "damage-resistance"?: number,
  "gas-resistance"?: boolean,
}

export interface Consumable {
  "health"?: number,
  "removes-bleeding"?: boolean,
}