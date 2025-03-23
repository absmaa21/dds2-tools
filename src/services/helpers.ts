import {Boss, Data, Equipment, Furniture, Hideout, Shop} from "../types/data.ts";
import {Item, MarkerType} from "../types/enums.ts";
import {equipments} from "./local/equipments.ts";
import {furnitures} from "./local/furnitures.ts";


/**
 * Returns the lowest needed level for given shop item
 * @param quantities
 */
export function getLowestNeededLevel(quantities: number[]): number | undefined {
    for (let i = 0; i < quantities.length; i++) {
        if (quantities[i] > 0) return i
    }
}


export function getMarkerDataStr(marker: MarkerType): keyof Data {
    switch (marker) {
        case MarkerType.HIDEOUT: return 'hideouts'
        case MarkerType.PAWN_SHOP: return 'pawn-shops'
        case MarkerType.SHOP: return 'shops'
        case MarkerType.EQUIP_SHOP: return 'equip-shops'
        case MarkerType.CLOTH_SHOP: return 'cloth-shops'
        case MarkerType.RESTAURANT: return 'restaurants'
        case MarkerType.DEALER_SPOT: return 'dealer-spots'
        case MarkerType.BOAT_DOCK: return 'anchor-spots'
        case MarkerType.MEDIC_POINT: return 'medic-points'
        case MarkerType.BOSS: return 'bosses'
    }
}


export function getStatsOfItem(item: Item): Equipment | Furniture | undefined {
    if (equipments.has(item)) return equipments.get(item)
    else if (furnitures.has(item)) return furnitures.get(item)
}


/**
 * Confirms if given marker is from type Shop
 * This is checked by the keys: "check-possible"
 * @param marker
 */
export function isShop(marker: object): marker is Shop {
    if (!marker) return false
    return "check-possible" in marker
}


/**
 * Confirms if given obj is from type Equipment
 * This is checked by the keys: "tier"
 * @param obj
 */
export function isEquipment(obj: object): obj is Equipment {
    return "tier" in obj
}


/**
 * Confirms if given obj is from type Boss
 * This is checked by the keys: "demands"
 * @param obj
 */
export function isBoss(obj: object): obj is Boss {
    return "demands" in obj
}


/**
 * Confirms if given obj is from type Hideout
 * This is checked by the keys: "price", "visibility", "security", "comfort"
 * @param obj
 */
export function isHideout(obj: object): obj is Hideout {
    return "price" in obj && "visibility" in obj && "security" in obj && "comfort" in obj
}


/**
 * Returns the discounted price
 * @param price Base price
 * @param discount Discount in format 0.05
 */
export function getDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount)
}
