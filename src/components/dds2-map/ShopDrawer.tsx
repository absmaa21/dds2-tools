import {Shop} from "../../types/data.ts";
import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import shopItem from "./ShopItem.tsx";
import ShopItem from "./ShopItem.tsx";


interface ShowDrawerHeaderProps {
  shop: Shop,
  selectedLevel: number,
  setSelectedLevel: React.Dispatch<React.SetStateAction<number>>,
}

export function ShopDrawerHeader({shop, selectedLevel, setSelectedLevel}: ShowDrawerHeaderProps) {

  const buttonStartStyle: React.CSSProperties = {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }

  const buttonEndStyle: React.CSSProperties = {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }

  return (<>
    <Typography variant={"subtitle2"} fontWeight={600}>
      Check possible {shop["check-possible"] ? "✅" : "❌"}
    </Typography>

    <div className={"level-button-container"}>
      {shop.discounts.map((d, i) => {
        const style: React.CSSProperties = {
          opacity: i === selectedLevel ? 1 : 0.6,
          ...(i === 0 && buttonStartStyle),
          ...(i === shop.discounts.length - 1 && buttonEndStyle),
        }

        return <button onClick={() => setSelectedLevel(i)} title={`Discount ${d * 100}%`} key={i}
                       className={"level-button"} style={style}
        >
          Level {i}
        </button>
      })}
    </div>
  </>)
}


interface ShopDrawerProps {
  shop: Shop,
  selectedLevel: number,
}

function ShopDrawer({shop, selectedLevel}: ShopDrawerProps) {

  const [shopItems, setShopItems] = useState<shopItem[]>([])

  useEffect(() => {
    function getAllShopItems() {
      const allShopItems: ShopItem[] = [...shop.items ?? [], ...shop.furnitures ?? [], ...shop.equipments ?? []]
      setShopItems([...allShopItems.filter(i => i.quantity[selectedLevel] > 0), ...allShopItems.filter(i => i.quantity[selectedLevel] <= 0)])
    }

    getAllShopItems()
  }, [selectedLevel, shop.equipments, shop.furnitures, shop.items]);

  return shopItems.map((i, index) => <ShopItem key={i.name + index} item={i} level={selectedLevel} shop={shop}/>)
}

export default ShopDrawer;