import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import DataProvider from "./contexts/DataProvider.tsx";
import MapDataProvider from "./contexts/MapDataProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <MapDataProvider>
        <App />
      </MapDataProvider>
    </DataProvider>
  </StrictMode>,
)
