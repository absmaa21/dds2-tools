import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";
import MapDrawer from "../components/dds2-map/MapDrawer.tsx";
import {Drawer, Grid2} from "@mui/material";


function Dds2Map() {

  const mapDrawerWidth: number = 260

  const Map = lazy(() => import('../components/dds2-map/Dds2Leaflet.tsx'))

  return (
    <Grid2 style={{display: "flex", flexDirection: 'row'}}>
      <Grid2>
        <Drawer>

        </Drawer>
      </Grid2>

      <Grid2>
        <Suspense fallback={<Loading width={mapDrawerWidth}/>}>
          <Map allocatedWidth={mapDrawerWidth}/>
        </Suspense>
      </Grid2>

      <Grid2>
        <MapDrawer width={mapDrawerWidth} />
      </Grid2>
    </Grid2>
  );
}

export default Dds2Map;