import React from 'react'
import "./hero.css"
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";


function Hero() {
  return (
    <section className='heroContainer'>
      <h1>
        Experience Elevated Banking
      </h1>

      <p className='heroMassage'>
        Senax Banking: Empowering Your Financial Journey with Simplicity, Security, and Smart Solutions for a Brighter Future.
      </p>

      <div className="directoryButtons">
        <a href='#' className="toLogin">
          <p>What are you waiting for</p>
          <HiMiniArrowTopRightOnSquare />
        </a>

        <div className="users">
          <p>
            50K User's Worldwide
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero