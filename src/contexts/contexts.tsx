import {createContext} from "react";
import {Data} from "../types/data.ts";
import * as React from "react";
import {MarkerType} from "../types/enums.ts";
import {ChoosableMarkers} from "../types/map.ts";

export interface DataContextProps {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>,
}

export const DataContext = createContext<DataContextProps | undefined>(undefined)


export interface MapDataContextProps {
  visibleTypes: MarkerType[],
  toggleVisibleType: (type: MarkerType) => void,

  getAvailableItems: () => string[],
  itemSearch: string,
  setItemSearch: React.Dispatch<React.SetStateAction<string>>,
  selectedItems: string[],
  submitItem: (item: string) => void,
  removeItem: (item: string) => void,

  chosenMarker: ChoosableMarkers,
  setChosenMarker: React.Dispatch<React.SetStateAction<ChoosableMarkers>>,
}

export const MapDataContext = createContext<MapDataContextProps | undefined>(undefined)