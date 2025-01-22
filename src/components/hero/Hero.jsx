import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='heroContainer'>
        <div className="topSection">
            <div className="rightSection">
                <div className="moto">
                    <h1>Versatile Solution For Your Everyday Needs</h1>
                </div>

                <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum est laboriosam modi architecto consequuntur debitis. 
                </div>

                <div className="register">
                     <button>
                        Join us Today
                     </button>

                     <button>
                        Login
                     </button>
                </div>
            </div>

            <div className="leftSection">

            </div>
   
        </div>

        <div className="bottomSection">
            <h2>
                "Senax Banking: Empowering Your Financial Journey with Simplicity, Security, and Smart Solutions for a Brighter Future."
            </h2>
            <p>Created by Alexander Agu and Sean Kumbo</p>
        </div>
    </section>
  )
}

export default Hero