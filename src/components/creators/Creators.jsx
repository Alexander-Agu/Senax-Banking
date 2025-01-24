import React from 'react'
import "./creator.css"

function Creators({name, des}) {
  return (
    <section className='creator'>
        <h2 className='creatorName'>{name}</h2>

        <p className='creatorDes'>
            {des}
        </p>
    </section>
  )
}

export default Creators