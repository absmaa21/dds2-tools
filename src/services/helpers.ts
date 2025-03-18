import {Data, IItem} from "../types/data.ts";
import {MarkerType} from "../types/enums.ts";

export function getAvailableLevel(item: IItem) {
    let lvl = 0;
    for (let i = 0; i < item.quantity.length; i++) {
        lvl = i
        if (item.quantity[i] > 0) return lvl
    }
    return lvl;
}


export function getMarkerDataStr(marker: MarkerType): keyof Data{
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