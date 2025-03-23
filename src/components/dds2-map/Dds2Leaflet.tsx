import L from "leaflet";
import useMapData from "../../hooks/useMapData.ts";
import {ShopItem} from "../../types/data.ts";
import {Item, MarkerType} from "../../types/enums.ts";
import {ImageOverlay, MapContainer, Marker, Popup, useMapEvents} from "react-leaflet";
import useData from "../../hooks/useData.ts";
import {
  anchorIcon,
  clothIcon,
  dealerIcon,
  furnitureIcon,
  heartIcon,
  hideoutIcon,
  medicIcon,
  pawnshopIcon,
  restaurantIcon, shopIcon
} from "./MarkerIcons.ts";
import DraggableMarker from "../DraggableMarker.tsx";
import img from '../../assets/dds2-map.jpg'
import {isShop} from "../../services/helpers.ts";


function MapEvents({onClick}: { onClick: () => void }) {
  useMapEvents({
    click: onClick,
  })
  return null
}


function Dds2Leaflet() {

  const {data} = useData()
  const {visibleTypes, selectedItems, setChosenMarker} = useMapData()
  const mapBounds = L.latLngBounds([1, 0], [0, 1])
  const maxBounds = L.latLngBounds([1.1, -0.1], [-0.1, 1.1])

  function hasSelectedItem(array?: ShopItem[]) {
    if (!array) return false
    return array.some(el => selectedItems.includes(el.name as Item))
  }

  function showMarkerType(type: MarkerType, obj: object) {
    if (!isShop(obj)) {
      return visibleTypes.includes(type) && selectedItems.length <= 0
    }

    if (selectedItems.length <= 0) return visibleTypes.includes(type)
    return hasSelectedItem(obj.items) || hasSelectedItem(obj.furnitures) || hasSelectedItem(obj.equipments)
  }

  return (
    <MapContainer
      center={mapBounds.getCenter()}
      zoom={12}
      minZoom={10}
      maxZoom={14}
      style={{height: '100vh', width: '100%'}}
      maxBounds={maxBounds}
      maxBoundsViscosity={0.01}
    >
      <MapEvents onClick={() => setChosenMarker(null)}/>
      <DraggableMarker/>

      <ImageOverlay
        url={img}
        bounds={mapBounds}
      />

      {data.shops.map((m, i) => showMarkerType(MarkerType.SHOP, m) &&
          <Marker
              key={i} icon={shopIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {data["pawn-shops"].map((m, i) => showMarkerType(MarkerType.PAWN_SHOP, m) &&
          <Marker
              key={i} icon={pawnshopIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {data.restaurants.map((m, i) => showMarkerType(MarkerType.RESTAURANT, m) &&
          <Marker
              key={i} icon={restaurantIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {data["cloth-shops"].map((m, i) => showMarkerType(MarkerType.CLOTH_SHOP, m) &&
          <Marker
              key={i} icon={clothIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {data["equip-shops"].map((m, i) => showMarkerType(MarkerType.EQUIP_SHOP, m) &&
          <Marker
              key={i} icon={furnitureIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {data.bosses.map((m, i) => showMarkerType(MarkerType.BOSS, m) &&
        <Marker
          key={i} icon={heartIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

      {data["anchor-spots"].map((m, i) => showMarkerType(MarkerType.BOAT_DOCK, m) &&
          <Marker
              key={i} icon={anchorIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(null)}}
          />
      )}

      {data.hideouts.map((m, i) => showMarkerType(MarkerType.HIDEOUT, m) &&
        <Marker
          key={i} icon={hideoutIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

      {data["medic-points"].map((m, i) => showMarkerType(MarkerType.MEDIC_POINT, m) &&
        <Marker
          key={i} icon={medicIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

      {data["dealer-spots"].map((m, i) => showMarkerType(MarkerType.DEALER_SPOT, m) &&
        <Marker
          key={i} icon={dealerIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(null)}}
        />
      )}

    </MapContainer>
  );
}

export default Dds2Leaflet;