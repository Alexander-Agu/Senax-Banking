import React from 'react';
import './header.css';
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <a href="#">S-B</a>
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
                    <a href="http://localhost:5173/home" className='navLink'>
                        Home
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className='navLink'>
                        About Us
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className='navLink'>
                        Creators
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className='navLink'>
                        Contact Us
                    </a>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Header