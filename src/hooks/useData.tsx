import {useContext} from "react";
import {DataContext, DataContextProps} from "../contexts/contexts.tsx";

export default function useData(): DataContextProps {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("DataContext must be used within DataProvider!")
  }
  return context
}