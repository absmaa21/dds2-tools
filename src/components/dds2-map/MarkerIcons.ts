import L from "leaflet";
import shopImg from '../../assets/markers/store-marker.png'
import hideoutImg from '../../assets/markers/hideout-marker.png'
import pawnshopImg from '../../assets/markers/pawn-shop-marker.png'
import medicImg from '../../assets/markers/medic-marker.png'
import anchorImg from '../../assets/markers/anchor-marker.png'
import heartImg from '../../assets/markers/heart-marker.png'
import restaurantImg from '../../assets/markers/restaurant-marker.png'
import clothImg from '../../assets/markers/shirt-marker.png'
import furnitureImg from '../../assets/markers/furniture-marker.png'
import dealerImg from '../../assets/markers/dealer-marker.png'

const iconSize: [number, number] = [120 * 0.3, 180 * 0.3]

export const shopIcon = new L.Icon({
  iconUrl: shopImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const hideoutIcon = new L.Icon({
  iconUrl: hideoutImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const pawnshopIcon = new L.Icon({
  iconUrl: pawnshopImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const medicIcon = new L.Icon({
  iconUrl: medicImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const anchorIcon = new L.Icon({
  iconUrl: anchorImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const heartIcon = new L.Icon({
  iconUrl: heartImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const restaurantIcon = new L.Icon({
  iconUrl: restaurantImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const clothIcon = new L.Icon({
  iconUrl: clothImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const furnitureIcon = new L.Icon({
  iconUrl: furnitureImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})

export const dealerIcon = new L.Icon({
  iconUrl: dealerImg,
  iconSize,
  iconAnchor: [iconSize[0] / 2, iconSize[1]],
  popupAnchor: [0, -iconSize[1]]
})