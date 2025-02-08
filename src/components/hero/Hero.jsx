import React from 'react'
import './hero.css'
import Header from '../header/Header'

function Hero() {
  return (
    <section className='heroContainer'>
        <div className="heroApp">
            <Header />
            <div className="heroWrapper">
                <div className="heroRight">
                    <h1>
                        Experience Elevated Banking
                    </h1>
                </div>

                <div className="heroLeft">
                    <p>
                        Senax Banking: Empowering Your Financial Journey with Simplicity, Security, and Smart Solutions for a Brighter Future.
                    </p>

                    <button>
                        What are you waiting for
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero