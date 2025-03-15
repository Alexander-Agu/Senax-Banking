import React, { useEffect, useState } from 'react'
import "./card.css"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import More from './More';

function Card({title, intro, more, id}) {
    const [checked, setChecked] = useState(false);
    let showContent = "";
    let dropDown = showContent = <FaChevronDown style={{display: "none"}} />;

    if (checked){
        showContent = <More more={more} check={setChecked} />
        dropDown = "";
    } else {
        showContent = "";
        dropDown = showContent = <FaChevronDown /> ;
    }

    return (
        <div className="cardContainer">
            <h1 className='cardTitle'>
                {title}
            </h1>
            <input type="checkbox" id='dropDown' />

            <div className="cardIntro">
                <p>
                    {intro}
                </p>

                <label htmlFor="dropDown" onClick={()=> setChecked(true)}>
                    {dropDown}
                </label>
            </div>

            {showContent}
        </div>
    )
}

export default Card