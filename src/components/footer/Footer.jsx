import React from 'react'
import "./footer.css"
import Contact from './Contact'

function Footer() {
  return (
    <footer className='contactContainer' id='contactUs'>
        <div className="contactRight">
            {<Contact />}
        </div>

        <div className="contactMid">
            <h2>Get in Touch</h2>
            <p>
                Crafted with passion by Alexander Agu and Sean Kumbo, bringing together React and Spring Boot for the Senax banking experience. A collaborative full-stack vision!
            </p>
        </div>

        <div className="contactLeft">
            {<Contact />}
        </div>
    </footer>
  )
}

export default Footer