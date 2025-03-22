import React from 'react'
import "./sidebar.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { BiTransferAlt } from "react-icons/bi";
import { FaBookBookmark } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { BsDoorOpen } from "react-icons/bs";


function Sidebar() {
  return (
    <nav className='sidebarContainer'>
        <ul className='topSide'>
            <li className='sidebarItem' >
                <a href="#"><LuLayoutDashboard /></a>
            </li>
            <li className='sidebarItem' >
                <a href="#"><BiTransferAlt /></a>
            </li>
            <li className='sidebarItem' >
                <a href="#"><FaBookBookmark /></a>
            </li>
        </ul>

        <ul className='bottomSide'>
            <li className='sidebarItem' >
                <a href="#"><FaUserCog /></a>
            </li>
            <li className='sidebarItem' >
                <a href="#"><BsDoorOpen /></a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar