import './Dds2Map.css'
import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";
import MapDrawer from "../components/dds2-map/MapDrawer.tsx";
import {Drawer, Typography} from "@mui/material";
import useMapData from "../hooks/useMapData.ts";


function Dds2Map() {

  const MapData = useMapData()
  const mapDrawerWidth: number = 280

  const Map = lazy(() => import('../components/dds2-map/Dds2Leaflet.tsx'))

  return (
    <div className={'container'}>
      <Drawer open={!!MapData.chosenMarker}> {/* Crashes because of the lazy loading --> TODO: Search for fix */}
        <Typography>{MapData.chosenMarker!.name}</Typography>
      </Drawer>

      <Suspense fallback={<Loading/>}>
        <Map/>
      </Suspense>

      <MapDrawer width={mapDrawerWidth}/>
    </div>
  );
}

export default Dds2Map;