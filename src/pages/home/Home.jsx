import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'

function Home() {
  return <>
    <main className='homeMain'>
      <Header />
      <Hero />
      <About />
    </main>
  </>
}

export default Home