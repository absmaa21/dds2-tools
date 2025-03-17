import {ReactNode, useState} from "react";
import {MapDataContext} from "./contexts.tsx";
import {Item, MarkerType} from "../types/enums.ts";
import {defaultVisibleMarkers} from "../services/defaults.ts";

interface Props {
  children: ReactNode,
}

function MapDataProvider({children}: Props) {

  const [visibleTypes, setVisibleTypes] = useState<MarkerType[]>(defaultVisibleMarkers)

  function toggleVisibleType(type: MarkerType) {
    if (visibleTypes.includes(type))
      setVisibleTypes(p => p.filter(t => t !== type))
    else
      setVisibleTypes(p => [...p, type])
  }

  const [itemSearch, setItemSearch] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<Item[]>([])

  function submitItem(item: Item) {
    if (selectedItems.includes(item)) return
    setSelectedItems(prev => [...prev, item])
  }

  function removeItem(item: string) {
    setSelectedItems(selectedItems.filter(i => i !== item))
  }

  function getAvailableItems() {
    return Object.values(Item).filter(i => !selectedItems.includes(i))
  }

  return (
    <MapDataContext.Provider value={{
      visibleTypes, toggleVisibleType, getAvailableItems, itemSearch, setItemSearch, selectedItems,
      submitItem, removeItem
    }}>
      {children}
    </MapDataContext.Provider>
  );
}

export default MapDataProvider;