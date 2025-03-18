import './MapSearch.css'
import {Typography} from "@mui/material";
import AutocompletionInput from "./AutocompletionInput.tsx";
import useMapData from "../../hooks/useMapData.ts";

function MapSearch() {

  const MapData = useMapData()

  return (
    <div>
      <Typography variant={'h6'} component={'h2'} align={'left'}>Search Items</Typography>

      <AutocompletionInput/>

      <div className={'tag-container'}>
        {MapData.selectedItems.map(i => (
          <div className={'tag'} onClick={() => MapData.removeItem(i)}>
            {i}
          </div>
        ))}
      </div>

    </div>
  );
}

export default MapSearch;