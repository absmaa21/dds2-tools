import {createContext} from "react";
import {Data} from "../types/data.ts";
import * as React from "react";
import {Item, MarkerType} from "../types/enums.ts";

export interface DataContextProps {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>,
}

export const DataContext = createContext<DataContextProps | undefined>(undefined)


export interface MapDataContextProps {
  visibleTypes: MarkerType[],
  toggleVisibleType: (type: MarkerType) => void,

  getAvailableItems: () => Item[],
  itemSearch: string,
  setItemSearch: React.Dispatch<React.SetStateAction<string>>,
  selectedItems: Item[],
  submitItem: (item: Item) => void,
  removeItem: (item: Item) => void,
}

export const MapDataContext = createContext<MapDataContextProps | undefined>(undefined)