import "./MarkerDrawer.css"
import {ChoosableMarkers} from "../../types/map.ts";
import {Typography} from "@mui/material";
import {isShop} from "../../services/helpers.ts";
import ShopItem from "./ShopItem.tsx";
import React, {useState} from "react";


interface Props {
  chosenMarker: ChoosableMarkers,
}

function MarkerDrawer({chosenMarker}: Props) {

  const [selectedLevel, setSelectedLevel] = useState(0)

  const buttonStartStyle: React.CSSProperties = {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }

  const buttonEndStyle: React.CSSProperties = {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }

  if (!chosenMarker) return null

  return (
    <div className={`marker-drawer ${chosenMarker ? "drawer-open" : ""}`}>
      <div className={"header"}>
        <Typography variant={"h6"} component={"h3"} noWrap fontWeight={700}>{chosenMarker.name}</Typography>
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

      {isShop(chosenMarker) && <div className={"marker-drawer-items"}>
        {chosenMarker.items?.map((i, index) =>
          <ShopItem key={i.name + index} item={i} level={selectedLevel} shop={chosenMarker}/>)}

        {chosenMarker.equipments?.map((i, index) =>
          <ShopItem key={i.name + index} item={i} level={selectedLevel} shop={chosenMarker}/>)}

        {chosenMarker.furnitures?.map((i, index) =>
          <ShopItem key={i.name + index} item={i} level={selectedLevel} shop={chosenMarker}/>)}
      </div>}
    </div>
  );
}

export default MarkerDrawer;