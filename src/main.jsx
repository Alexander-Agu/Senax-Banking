import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Dashboard from './pages/dashboard/Dashboard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
