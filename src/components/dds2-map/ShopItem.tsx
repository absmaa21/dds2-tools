import "./ShopItem.css"
import {Divider, Typography} from "@mui/material";
import type {Shop, ShopItem} from "../../types/data.ts";
import {getDiscountedPrice, getLowestNeededLevel, getStatsOfItem, isEquipment} from "../../services/helpers.ts";
import Row from "../Row.tsx";

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
      <Row>
        <Typography fontSize={12} fontWeight={700}>{item.name}</Typography>
        {details && isEquipment(details) && <Typography fontSize={10} fontWeight={700}>T{details.tier}</Typography>}
        {item.amount && <Typography fontSize={11} fontWeight={700} color={'#fffa'}>{`${item.amount} ${item.unit}`}</Typography>}
      </Row>

      <Row>
        <Typography fontSize={12} color={'#fffa'}>B {getDiscountedPrice(item.price, shop.discounts[level]).toLocaleString()}</Typography>
        <Typography fontSize={12} color={'#fffa'}>x{item.quantity[level]?.toLocaleString() ?? ' unknown quantity'}</Typography>
      </Row>

      {level < (neededLevel ?? 999) && <div className={"needed-level-overlay"}>
        Level {neededLevel ?? 'unknown'} is needed!
      </div>}

      <Divider style={{marginTop: 4, marginBottom: 4}}/>

      {details && Object.entries(details).map(([key, value]) => !["tier"].includes(key) && (
        <Row key={key}>
          <Typography fontSize={11} color={'#fffa'}>{key}</Typography>
          <Typography fontSize={11} color={'#fffa'}>{!Number.isNaN(value) ? (value as number).toLocaleString() : value}</Typography>
        </Row>
      ))}
    </div>
  );
}

export default ShopItem;