import React from 'react'
import "./serviceCard.css"

function ServiceCard({service}) {
  return (
    <div className='serviceCardContainer'>
        <h2>{service}</h2>

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum est laboriosam modi architecto consequuntur debitis.
        </p>
    </div>
  )
}

export default ServiceCard