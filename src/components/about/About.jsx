import React from 'react'
import "./about.css"
import SliderItem from '../sliderItem/SliderItem'
import ServiceCard from '../serviceCard/ServiceCard'


function About() {
  return (
    <article className='aboutContainer'>
      <div className="aboutTop">
        <div className="aboutIntro">
          <p>
            Who are we?
          </p>

          <h2>
            Senax banking, The best digital banking you can trust
          </h2>
        </div>

        <div className="aboutSpeech">
          <p className='topSpeech'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum est laboriosam modi architecto consequuntur debitis.
          </p>
        </div>
      </div>

      <div className="aboutBottom">
        <h2 className='serv'>Our Services</h2>

        <div className="aboutServices">
          <ServiceCard service={"Secure Banking"}/>
          <ServiceCard service={"Transfer with Ease"}/>
          <ServiceCard service={"Send Cash"}/>
          <ServiceCard service={"User Friendly Experience"}/>
        </div>
      </div>
    </article>
  )
}

export default About







/* 
        <div className="aboutLeft">
          {<SliderItem img={"1"} des={"            Senax Banking is proud to see our user base growing daily! Your trust inspires us to keep innovating and delivering the best banking experience. Together, we’re building something great!"}/>}

          {<SliderItem img={2} des={"            Senax Banking is proud to see our user base growing daily! Your trust inspires us to keep innovating and delivering the best banking experience. Together, we’re building something great!"}/>}
        </div>

*/