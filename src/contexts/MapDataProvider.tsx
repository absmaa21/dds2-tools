import {ReactNode, useEffect, useState} from "react";
import {MapDataContext} from "./contexts.tsx";
import {Item, MarkerType} from "../types/enums.ts";
import {defaultVisibleMarkers} from "../services/defaults.ts";
import {ChoosableMarkers} from "../types/map.ts";
import Storage, {StorageKey} from "../services/Storage.ts";

interface Props {
  children: ReactNode,
}

function MapDataProvider({children}: Props) {

  const [hasMounted, setHasMounted] = useState(false)

  const [visibleTypes, setVisibleTypes] = useState<MarkerType[]>(defaultVisibleMarkers)

  function toggleVisibleType(type: MarkerType) {
    if (visibleTypes.includes(type))
      setVisibleTypes(p => p.filter(t => t !== type))
    else
      setVisibleTypes(p => [...p, type])
  }

  const [itemSearch, setItemSearch] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  function submitItem(item: string) {
    if (selectedItems.includes(item)) return
    setSelectedItems(prev => [...prev, item])
  }

  function removeItem(item: string) {
    setSelectedItems(selectedItems.filter(i => i !== item))
  }

  function getAvailableItems() {
    return Object.values(Item).filter(i => !selectedItems.includes(i))
  }

  const [chosenMarker, setChosenMarker] = useState<ChoosableMarkers>(null)

  useEffect(() => {
    const visibleTypesStored = Storage.load(StorageKey.VISIBLE_TYPES)
    if (visibleTypesStored) setVisibleTypes(JSON.parse(visibleTypesStored))
    setHasMounted(true)
  }, []);

  useEffect(() => {
    if (hasMounted) Storage.save(StorageKey.VISIBLE_TYPES, visibleTypes)
  }, [hasMounted, visibleTypes]);

  return (
    <MapDataContext.Provider value={{
      visibleTypes, toggleVisibleType, getAvailableItems, itemSearch, setItemSearch, selectedItems,
      submitItem, removeItem, chosenMarker, setChosenMarker
    }}>
      {children}
    </MapDataContext.Provider>
  );
}

export default MapDataProvider;