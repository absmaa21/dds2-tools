import './MapDrawer.css'
import {Typography} from "@mui/material";
import MapSearch from "./MapSearch.tsx";


interface Props {
  width: number,
}

function MapDrawer({width}: Props) {

  return (
    <div className={"body"} style={{minWidth: width}}>
      <Typography variant={'h5'} component={'h1'} fontWeight={800}>Interactive Map</Typography>

      <MapSearch/>

    </div>
  );
}

export default MapDrawer;