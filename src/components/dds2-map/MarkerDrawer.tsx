import "./MarkerDrawer.css"
import {ChoosableMarkers} from "../../types/map.ts";
import {isHideout, isShop} from "../../services/helpers.ts";
import {useState} from "react";
import MarkerDrawerHeader from "./MarkerDrawerHeader.tsx";
import ShopDrawer, {ShopDrawerHeader} from "./ShopDrawer.tsx";
import HideoutDrawer, {HideoutDrawerHeader} from "./HideoutDrawer.tsx";


interface Props {
  chosenMarker: ChoosableMarkers,
}

function MarkerDrawer({chosenMarker}: Props) {

  const [selectedLevel, setSelectedLevel] = useState(0)

  if (!chosenMarker) return null

  return (
    <div className={`marker-drawer ${chosenMarker ? "drawer-open" : ""}`}>
      <div className={"header"}>
        <MarkerDrawerHeader marker={chosenMarker}/>

        {isShop(chosenMarker) && <ShopDrawerHeader shop={chosenMarker} selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel}/>}

        {isHideout(chosenMarker) && <HideoutDrawerHeader hideout={chosenMarker}/>}
      </div>

      <div className={"marker-drawer-items"}>
        {isShop(chosenMarker) && <ShopDrawer shop={chosenMarker} selectedLevel={selectedLevel}/>}
        {isHideout(chosenMarker) && <HideoutDrawer hideout={chosenMarker}/>}
      </div>
    </div>
  );
}

export default MarkerDrawer;