import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DoughnutLand from './doughnutLand.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DoughnutLand/>
  </StrictMode>,
)
