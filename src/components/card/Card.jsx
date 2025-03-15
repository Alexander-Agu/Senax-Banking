import React from 'react'
import "./card.css"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function Card() {
    return (
        <div className="cardContainer">
            <h1 className='cardTitle'>
                Online Money Exchange
            </h1>
            <input type="checkbox" id='dropDown' />

            <div className="cardIntro">
                <p>
                    Online money exchange in the Senax banking app enables quick and secure currency conversion for international transactions.
                </p>

                <label htmlFor="dropDown">
                    <FaChevronDown />
                </label>
            </div>

            
            <div className='cardInfo'>
                <p>
                    Senax offers real-time exchange rates, low fees, and strong security features like encryption and two-factor authentication. Users can effortlessly convert currencies for travel, business, or online purchases, ensuring a smooth and transparent experience.
                </p>

                <label htmlFor="dropDown">
                    <FaChevronUp className='up' />
                </label>
            </div>
        </div>
    )
}

export default Card