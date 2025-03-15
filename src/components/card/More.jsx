import React from 'react'
import "./card.css"
import { FaChevronUp } from "react-icons/fa";

function More({more, check}) {
  return (
    <div className='cardInfo'>
        <p>
            {more}
        </p>

        <label htmlFor="dropDown" onClick={()=> check(false)}>
            <FaChevronUp className='up' />
        </label>
    </div>
  )
}

export default More