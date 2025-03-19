import './MapDrawer.css'
import {Typography} from "@mui/material";
import MapSearch from "./MapSearch.tsx";
import useMapData from "../../hooks/useMapData.ts";
import {MarkerType} from "../../types/enums.ts";
import useData from "../../hooks/useData.ts";
import {getMarkerDataStr} from "../../services/helpers.ts";


interface Props {
  width: number,
}

function MapDrawer({width}: Props) {

  const MapData = useMapData()
  const {data} = useData()

  return (
    <div className={"body"} style={{minWidth: width}}>

      <Typography variant={'h5'} component={'h1'} fontWeight={800}>Interactive Map</Typography>

      <MapSearch/>

      <Typography variant={'h6'} component={'h2'} align={'left'} marginTop={2}>Filter Markers</Typography>

      <div className={'button-container'}>
        {Object.values(MarkerType).map(m => (
          <button
            className={MapData.visibleTypes.includes(m) ? "button-selected" : ""}
            onClick={() => MapData.toggleVisibleType(m)} key={m}
          >
            {m}
            <span className={'badge'}>{(data[getMarkerDataStr(m)] as Array<never>).length}</span>
          </button>
        ))}
      </div>

    </div>
  );
}

export default MapDrawer;