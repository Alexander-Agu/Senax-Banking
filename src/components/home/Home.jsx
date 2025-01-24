import React from 'react'
import Hero from '../hero/Hero'
import About from '../About/About'
import "./home.css"

function Home() {
  return (
    <main className='home'>
        {<Hero />}
        {<About />}
    </main>
  )
}

export default Home