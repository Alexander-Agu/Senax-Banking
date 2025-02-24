import React from 'react'
import "./header.css"
import { IoMdMenu } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";

function Header() {
  return (
    <header className='headerContainer'>
        <div className="logo">
            <h2>Senax Banking</h2>
        </div>

        <input type="checkbox" id='sidebar' />
        <label htmlFor="sidebar" className='openHeader'>
            <IoMdMenu />
        </label>
        <nav className='navbar'>
            <ul className='navList'>
                <label htmlFor="sidebar" className='headerClose'>
                    <RiCloseLargeLine />
                </label>
                <li className='navItem'>
                    <p>Home</p>
                </li>
                <li className='navItem'>
                    <p>Service</p>
                </li>
                <li className='navItem'>
                    <p>Login</p>
                </li>
            </ul>

            <div className="toSignUp">
                <div className="createAccount">
                    <p>Create Account</p>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header