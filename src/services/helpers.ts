import {IItem} from "../types/data.ts";

export function getAvailableLevel(item: IItem) {
    let lvl = 0;
    for (let i = 0; i < item.quantity.length; i++) {
        lvl = i
        if (item.quantity[i] > 0) return lvl
    }
    return lvl;
}
