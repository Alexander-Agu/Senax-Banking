import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import './style.css'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Register from './components/register/Register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
