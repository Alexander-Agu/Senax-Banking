import React from 'react';
import './header.css';
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <a href="http://localhost:5173/">S-B</a>
        </div>

        <nav className='navbar'>
            <input type="checkbox" id='sidebar' />
            <label htmlFor="sidebar" className='menu'> {/* Opens the sidebar */}
                <TiThMenuOutline />
            </label>

            <ul className='navList'>
                <label htmlFor="sidebar" className='close'> {/* Closes the sidebar */}
                    <MdClose />
                </label>


                <li className='navItem'>
                    <a href="http://localhost:5173/" className='navLink'>
                        Home
                    </a>
                </li>
                <li className='navItem'>
                    <a href="http://localhost:5173/login" className='navLink'>
                        Login
                    </a>
                </li>
                <li className='navItem'>
                    <a href="http://localhost:5173/signup" className='navLink'>
                        Sign Up
                    </a>
                </li>


                    <a href="http://localhost:5173/signup" className=' specialLink'>
                        Join Us Today
                    </a>
            </ul>

        </nav>
    </header>
  )
}

export default Header