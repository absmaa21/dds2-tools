import L from "leaflet";
import useMapData from "../hooks/useMapData.ts";
import {IItem, Shop} from "../types/data.ts";
import {Item, MarkerType} from "../types/enums.ts";
import {ImageOverlay, MapContainer, Marker, Popup, useMapEvents} from "react-leaflet";
import useData from "../hooks/useData.ts";
import {clothIcon, furnitureIcon, pawnshopIcon, restaurantIcon, shopIcon} from "./MarkerIcons.ts";
import DraggableMarker from "./DraggableMarker.tsx";


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
    return visibleTypes.includes(type) || selectedItems.length > 0
  }

  function showShopMarker(shop: Shop) {
    if (selectedItems.length <= 0) return true
    return hasSelectedItem(shop.items) || hasSelectedItem(shop.furnitures) || hasSelectedItem(shop.equipments)
  }

  return (
    <MapContainer
      center={mapBounds.getCenter()}
      zoom={11}
      minZoom={9}
      maxZoom={13}
      style={{height: 700, width: 500}}
      maxBounds={L.latLngBounds(mapBounds.getSouthWest(), [mapBounds.getNorth(), mapBounds.getEast() + 0.2])}
      maxBoundsViscosity={0.2}
    >
      <MapEvents onClick={() => setChosenMarker(null)}/>
      <DraggableMarker/>

      <ImageOverlay
        url='https://images2.imgbox.com/36/55/ESV6ctZc_o.jpg'
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

    </MapContainer>
  );
}

export default Dds2Leaflet;