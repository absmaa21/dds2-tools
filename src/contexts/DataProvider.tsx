import {DataContext} from "./contexts.tsx";
import {ReactNode, useState} from "react";
import {Data} from "../types/data.ts";
import localData from "../services/local/localData.ts";

interface Props {
  children: ReactNode,
}

function DataProvider({children}: Props) {

  const [data, setData] = useState<Data>(localData)

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;