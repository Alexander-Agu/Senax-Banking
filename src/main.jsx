import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Hero from "./components/hero/Hero"
import Home from "./pages/home/Home"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
