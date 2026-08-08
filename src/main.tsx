import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ScoutApp from './ScoutApp'
import "./App.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScoutApp />
  </StrictMode>,
)
