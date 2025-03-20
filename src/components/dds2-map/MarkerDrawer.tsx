import "./MarkerDrawer.css"
import {ChoosableMarkers} from "../../types/map.ts";
import {Typography} from "@mui/material";


interface Props {
  chosenMarker: ChoosableMarkers,
}

function MarkerDrawer({chosenMarker}: Props) {

  return (
    <div className={`marker-drawer ${chosenMarker ? "drawer-open" : ""}`}>
      {chosenMarker && <div className={"content"}>
          <Typography variant={"h6"} component={"h3"} noWrap>{chosenMarker.name}</Typography>
      </div>}
    </div>
  );
}

export default MarkerDrawer;