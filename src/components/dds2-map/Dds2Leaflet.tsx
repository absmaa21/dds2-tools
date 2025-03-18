import L from "leaflet";
import useMapData from "../../hooks/useMapData.ts";
import {IItem, Shop} from "../../types/data.ts";
import {Item, MarkerType} from "../../types/enums.ts";
import {ImageOverlay, MapContainer, Marker, Popup, useMapEvents} from "react-leaflet";
import useData from "../../hooks/useData.ts";
import {
  anchorIcon,
  clothIcon,
  furnitureIcon,
  heartIcon, hideoutIcon, medicIcon,
  pawnshopIcon,
  restaurantIcon,
  shopIcon
} from "./MarkerIcons.ts";
import DraggableMarker from "../DraggableMarker.tsx";
import img from '../../assets/dds2-map.jpg'


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

  function hasSelectedItem(array?: IItem[]) {
    if (!array) return false
    return array.some(el => selectedItems.includes(el.name as Item))
  }

  function showMarkerType(type: MarkerType) {
    return visibleTypes.includes(type)
  }

  function showShopMarker(shop: Shop) {
    if (selectedItems.length <= 0) return true
    return hasSelectedItem(shop.items) || hasSelectedItem(shop.furnitures) || hasSelectedItem(shop.equipments)
  }

  return (
    <MapContainer
      center={mapBounds.getCenter()}
      zoom={12}
      minZoom={10}
      maxZoom={14}
      style={{height: '100vh', width: '100%'}}
      maxBounds={mapBounds}
      maxBoundsViscosity={0.01}
    >
      <MapEvents onClick={() => setChosenMarker(null)}/>
      <DraggableMarker/>

      <ImageOverlay
        url={img}
        bounds={mapBounds}
      />

      {showMarkerType(MarkerType.SHOP) && data.shops.map((m, i) => showShopMarker(m) &&
          <Marker
              key={i} icon={shopIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.PAWN_SHOP) && data["pawn-shops"].map((m, i) => showShopMarker(m) &&
          <Marker
              key={i} icon={pawnshopIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.RESTAURANT) && data.restaurants.map((m, i) => showShopMarker(m) &&
          <Marker
              key={i} icon={restaurantIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.CLOTH_SHOP) && data["cloth-shops"].map((m, i) => showShopMarker(m) &&
          <Marker
              key={i} icon={clothIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.EQUIP_SHOP) && data["equip-shops"].map((m, i) => showShopMarker(m) &&
          <Marker
              key={i} icon={furnitureIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(m)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.BOSS) && data.bosses.map((m, i) =>
        <Marker
          key={i} icon={heartIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

      {showMarkerType(MarkerType.BOAT_DOCK) && data["anchor-spots"].map((m, i) =>
          <Marker
              key={i} icon={anchorIcon}
              position={L.latLng(m.location.x, m.location.y)}
              eventHandlers={{click: () => setChosenMarker(null)}}>
              <Popup>{m.name}</Popup>
          </Marker>)
      }

      {showMarkerType(MarkerType.HIDEOUT) && data.hideouts.map((m, i) =>
        <Marker
          key={i} icon={hideoutIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

      {showMarkerType(MarkerType.MEDIC_POINT) && data["medic-points"].map((m, i) =>
        <Marker
          key={i} icon={medicIcon}
          position={L.latLng(m.location.x, m.location.y)}
          eventHandlers={{click: () => setChosenMarker(m)}}>
          <Popup>{m.name}</Popup>
        </Marker>)
      }

    </MapContainer>
  );
}

export default Dds2Leaflet;