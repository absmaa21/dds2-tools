import {lazy, Suspense} from "react";
import Loading from "../components/Loading.tsx";


function Dds2Map() {

  const Map = lazy(() => import('../components/Dds2Leaflet.tsx'))

  return (
    <div style={{display: "flex", flexDirection: 'row', backgroundColor: '#000'}}>
      <Suspense fallback={<Loading/>}>
        <Map/>
      </Suspense>
    </div>
  );
}

export default Dds2Map;