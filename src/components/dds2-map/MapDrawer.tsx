import './MapDrawer.css'
import {IconButton, Modal, Typography} from "@mui/material";
import MapSearch from "./MapSearch.tsx";
import useMapData from "../../hooks/useMapData.ts";
import {MarkerType} from "../../types/enums.ts";
import useData from "../../hooks/useData.ts";
import {getMarkerDataStr} from "../../services/helpers.ts";
import {Settings} from "@mui/icons-material";
import {discordLink} from "../../services/faq.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {useState} from "react";
import SettingsPage from "./SettingsPage.tsx";


interface Props {
  width: number,
}

function MapDrawer({width}: Props) {

  const MapData = useMapData()
  const {data} = useData()

  const [showSettingsModal, toggleSettingsModal] = useState(false)

  return (
    <div className={"body"} style={{minWidth: width, maxWidth: width}}>

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

      <div className={"map-drawer-extra-buttons"}>
        <IconButton onClick={() => toggleSettingsModal(true)}>
          <Settings/>
        </IconButton>
        <IconButton onClick={() => window.open(discordLink, "_blank")}>
          <FontAwesomeIcon icon={faDiscord}/>
        </IconButton>
      </div>

      <Modal open={showSettingsModal} onClose={() => toggleSettingsModal(false)}>
        <SettingsPage/>
      </Modal>

      {MapData.itemSearch && <div className={"map-drawer-disabled"}/>}
    </div>
  );
}

export default MapDrawer;