import './Dds2Map.css'
import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";
import MapDrawer from "../components/dds2-map/MapDrawer.tsx";
import {Drawer} from "@mui/material";


function Dds2Map() {

  const mapDrawerWidth: number = 280

  const Map = lazy(() => import('../components/dds2-map/Dds2Leaflet.tsx'))

  return (
    <div className={'container'}>
      <Drawer>

      </Drawer>

      <Suspense fallback={<Loading/>}>
        <Map/>
      </Suspense>

      <MapDrawer width={mapDrawerWidth}/>
    </div>
  );
}

export default Dds2Map;