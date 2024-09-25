import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import doughnutLand from './doughnutLand.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <doughnutLand />
  </StrictMode>,
)
