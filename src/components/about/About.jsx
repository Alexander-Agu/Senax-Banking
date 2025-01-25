import React from 'react'
import "./about.css"
import SliderItem from '../sliderItem/SliderItem'


function About() {
  return (
    <article className='about' id='aboutUs'>
        <div className="aboutRight">
          <h2 className='aboutStatement'>
            Here is how we are different from the others.
          </h2>

          <p className='aboutAnswer'>
            One reason Senax Banking could stand out is its focus on <span>user-friendly digital experiences.</span> With a streamlined app interface, innovative features, and secure integration of modern technologies like <span>seamless account management</span> and <span>real-time notifications</span>, Senax Banking offers unparalleled convenience and control over personal finances. It’s tailored for users who value efficiency, transparency, and cutting-edge tools in their banking journey.
          </p>
        </div>

        <div className="aboutLeft">
          {<SliderItem img={"1"} des={"            Senax Banking is proud to see our user base growing daily! Your trust inspires us to keep innovating and delivering the best banking experience. Together, we’re building something great!"}/>}

          {<SliderItem img={2} des={"            Senax Banking is proud to see our user base growing daily! Your trust inspires us to keep innovating and delivering the best banking experience. Together, we’re building something great!"}/>}
        </div>
    </article>
  )
}

export default About