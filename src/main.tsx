import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ScoutApp from './ScoutApp.tsx'
import Page from './App/Dashboard/page'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
