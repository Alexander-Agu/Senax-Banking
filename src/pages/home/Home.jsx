import React from 'react'
import Hero from '../../components/hero/Hero'
import About from '../../components/About/About'
import "./home.css"
import Creators from '../../components/creators/Creators'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <main className='home'>
      {<Header />}
      {<Hero />}
      {<About />}

      <div className="creatorContainer" id='creators'>
          <h2>Creators</h2>

          <div className="theCreator">
              {<Creators name={"Alexander I. Agu"} des={"Hi, I'm Alexander Agu, and I'm responsible for developing the front end of our Senax banking website using React. My focus is on creating a seamless and engaging user interface that enhances the experience for our users. This project is a collaborative effort, and I'm excited to contribute to building a functional and innovative banking platform!"}/>}
              {<Creators name={"Sean Kumbo"} des={"Hi, I'm Sean Kumbo, and I'm in charge of developing the backend of our Senax banking website using Java Spring Boot. My role is to ensure the platform is secure, efficient, and capable of handling all the functionality needed for a seamless banking experience. Collaborating on this full-stack project has been an exciting opportunity to bring our vision to life!"}/>}
          </div>
      </div>

      {<Footer />}
    </main>
  )
}

export default Home