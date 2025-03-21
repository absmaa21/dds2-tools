import "./ShopItem.css"
import {Typography} from "@mui/material";
import type {Shop, ShopItem} from "../../types/data.ts";
import {getDiscountedPrice, getLowestNeededLevel, getStatsOfItem, isEquipment} from "../../services/helpers.ts";

interface Props {
  item: ShopItem,
  level: number,
  shop: Shop,
}

function ShopItem({item, level, shop}: Props) {

  const details = getStatsOfItem(item.name)
  const neededLevel = getLowestNeededLevel(item.quantity)

  return (
    <div className={"shop-item-container"}>
      <div className={"shop-item-row"}>
        <Typography fontSize={12} fontWeight={700}>{item.name}</Typography>
        {details && isEquipment(details) && <Typography fontSize={11} fontWeight={700}>T{details.tier}</Typography>}
      </div>

      <div className={"shop-item-row"}>
        <Typography fontSize={12} color={'#fffa'}>B {getDiscountedPrice(item.price, shop.discounts[level]).toLocaleString()}</Typography>
        <Typography fontSize={12} color={'#fffa'}>x{item.quantity[level]?.toLocaleString() ?? 'unknown'}</Typography>
      </div>

      {level < (neededLevel ?? 999) && <div className={"needed-level-overlay"}>
        Level {neededLevel ?? 'unknown'} is needed!
      </div>}
    </div>
  );
}

export default ShopItem;