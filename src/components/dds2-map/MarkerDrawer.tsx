import "./MarkerDrawer.css"
import {ChoosableMarkers} from "../../types/map.ts";
import {Typography} from "@mui/material";
import {isShop} from "../../services/helpers.ts";
import ShopItem from "./ShopItem.tsx";
import React, {useEffect, useState} from "react";
import shopItem from "./ShopItem.tsx";


interface Props {
  chosenMarker: ChoosableMarkers,
}

function MarkerDrawer({chosenMarker}: Props) {

  const [selectedLevel, setSelectedLevel] = useState(0)
  const [shopItems, setShopItems] = useState<shopItem[]>([])

  const buttonStartStyle: React.CSSProperties = {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }

  const buttonEndStyle: React.CSSProperties = {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }

  useEffect(() => {
    function getAllShopItems() {
      if (!chosenMarker || !isShop(chosenMarker)) return

      const allShopItems: ShopItem[] = [...chosenMarker.items ?? [], ...chosenMarker.furnitures ?? [], ...chosenMarker.equipments ?? []]
      setShopItems([...allShopItems.filter(i => i.quantity[selectedLevel] > 0), ...allShopItems.filter(i => i.quantity[selectedLevel] <= 0)])
    }

    getAllShopItems()
  }, [chosenMarker, selectedLevel]);

  if (!chosenMarker) return null

  return (
    <div className={`marker-drawer ${chosenMarker ? "drawer-open" : ""}`}>
      <div className={"header"}>
        <Typography variant={"h6"} component={"h3"} fontWeight={700}>{chosenMarker.name}</Typography>
        <Typography variant={"subtitle1"} component={"h4"} noWrap fontWeight={700} fontSize={14} color={'#fff5'}
                    letterSpacing={1}>
          {chosenMarker.area}
        </Typography>

        {isShop(chosenMarker) && <>
            <Typography variant={"subtitle2"} fontWeight={600}>
                Check possible {chosenMarker["check-possible"] ? "✅" : "❌"}
            </Typography>

            <div className={"level-button-container"}>
              {chosenMarker.discounts.map((d, i) => {
                const style: React.CSSProperties = {
                  opacity: i === selectedLevel ? 1 : 0.6,
                  ...(i === 0 && buttonStartStyle),
                  ...(i === chosenMarker.discounts.length - 1 && buttonEndStyle),
                }

                return <button onClick={() => setSelectedLevel(i)} title={`Discount ${d * 100}%`} key={i}
                               className={"level-button"} style={style}
                >
                  Level {i}
                </button>
              })}
            </div>
        </>}
      </div>

      <div className={"marker-drawer-items"}>
        {isShop(chosenMarker) && shopItems.map((i, index) =>
          <ShopItem key={i.name + index} item={i} level={selectedLevel} shop={chosenMarker}/>)}
      </div>
    </div>
  );
}

export default MarkerDrawer;