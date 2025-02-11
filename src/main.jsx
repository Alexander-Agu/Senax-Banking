import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Hero from './components/hero/Hero'
import Home from './pages/home/Home'
import SignUp from "./components/signup/SignUp"
import Login from './components/login/Login'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
