import {createContext} from "react";
import {Data} from "../types/data.ts";
import * as React from "react";

export interface DataContextProps {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>,
}

export const DataContext = createContext<DataContextProps | undefined>(undefined)