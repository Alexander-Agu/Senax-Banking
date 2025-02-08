import React from 'react'
import "./footer.css"
import Contacts from '../contacts/Contacts'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footerRight">
            <h2>
                Contact Us Today
            </h2>

            <p>
                Versatile Solution For Your Everyday Needs
            </p>
        </div>

        <div className="footerLeft">
          <Contacts />
          <Contacts />
        </div>
    </footer>
  )
}

export default Footer