import {Equipment} from "../../types/data.ts";
import {Item} from "../../types/enums.ts";


const equipments: Record<Item, Equipment> = {
  [Item.LABORATORY_TRAY]: {
    "tier": 1,
    "hideout-stash": 1,
    "substance-storage": 150,
    "visibility": 0.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
  },
  [Item.MORTAR]: {
    "tier": 1,
    "visibility": 0.5,
    "crafting-speed": 0.4,
    "waste-amount": 1,
    "production-cost": 1,
  },
  [Item.DRYING_RACK]: {
    "tier": 1,
    "visibility": 1,
    "crafting-speed": 0.8,
    "waste-amount": 1.1,
    "production-cost": 1,
  },
  [Item.HYBRID_DRYER]: {
    "tier": 2,
    "visibility": 1,
    "crafting-speed": 1.3,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 50,
  },
  [Item.GROWBOX]: {
    "tier": 1,
    "visibility": 1.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 80,
  },
  [Item.RACK]: {
    "tier": 2,
    "visibility": 1.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 150,
  },
  [Item.SEEDLING_BOX]: {
    "tier": 2,
    "visibility": 0.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
  },
  [Item.KITCHEN_STOVE]: {
    "tier": 1,
    "visibility": 1,
    "crafting-speed": 0.7,
    "waste-amount": 1.2,
    "production-cost": 1,
    "energy-usage": 2500,
  },
  [Item.ELECTRIC_PRESSURE_COOKER]: {
    "tier": 2,
    "visibility": 1,
    "crafting-speed": 1.15,
    "waste-amount": 0.95,
    "production-cost": 1,
    "energy-usage": 2000,
  },
  [Item.SMALL_FERMENTATION_VAT]: {
    "tier": 2,
    "visibility": 1,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
  },
  [Item.BUCKET]: {
    "tier": 1,
    "visibility": 0.5,
    "crafting-speed": 0.5,
    "waste-amount": 1.1,
    "production-cost": 1,
  },
  [Item.COFFEE_GRINDER]: {
    "tier": 2,
    "visibility": 0.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 120,
  },
  [Item.LABORATORY_AUTOCLAVE]: {
    "tier": 2,
    "visibility": 2,
    "crafting-speed": 1.25,
    "waste-amount": 0.8,
    "production-cost": 1,
    "energy-usage": 1400,
  },
  [Item.LABORATORY_WATER_BATH]: {
    "tier": 3,
    "visibility": 1.5,
    "crafting-speed": 1.5,
    "waste-amount": 0.5,
    "production-cost": 1,
    "energy-usage": 2400,
  },
  [Item.LABORATORY_ICE_BATH]: {
    "tier": 4,
    "visibility": 2,
    "crafting-speed": 1.5,
    "waste-amount": 0.8,
    "production-cost": 1,
    "energy-usage": 1200,
  },
  [Item.LABORATORY_CENTRIFUGE]: {
    "tier": 3,
    "visibility": 1,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 150,
  },
  [Item.LABORATORY_OVEN]: {
    "tier": 3,
    "visibility": 1.5,
    "crafting-speed": 1.6,
    "waste-amount": 1,
    "production-cost": 1,
    "energy-usage": 2000,
  },
  [Item.HOMEMADE_SOAKING_VAT]: {
    "tier": 2,
    "visibility": 2,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
  },
  [Item.DRYING_OUTDOOR_RACK]: {
    "tier": 2,
    "visibility": 3.5,
    "crafting-speed": 1.05,
    "waste-amount": 1.1,
    "production-cost": 1,
  },
  [Item.LABORATORY_ORBITAL_SHAKER]: {
    "tier": 4,
    "visibility": 1.5,
    "crafting-speed": 2,
    "waste-amount": 0.2,
    "production-cost": 1,
    "energy-usage": 300,
  },
  [Item.LARGE_DRYING_TABLE]: {
    "tier": 2,
    "visibility": 2,
    "crafting-speed": 1.4,
    "waste-amount": 0.9,
    "production-cost": 1,
    "energy-usage": 4000,
  },
  [Item.OLD_BARREL]: {
    "tier": 1,
    "visibility": 1.5,
    "crafting-speed": 0.6,
    "waste-amount": 1.1,
    "production-cost": 1,
  },
  [Item.KITCHEN_MIXER]: {
    "tier": 2,
    "visibility": 1,
    "crafting-speed": 1.7,
    "waste-amount": 0.8,
    "production-cost": 1,
    "energy-usage": 1500,
  },
  [Item.PLASTIC_BOX]: {
    "tier": 2,
    "visibility": 0.5,
    "crafting-speed": 1,
    "waste-amount": 1,
    "production-cost": 1,
  }
}