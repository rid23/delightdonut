<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
=======
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
>>>>>>> 65c2e394c6b8855e814ad81f9954cb6110e1eff3
