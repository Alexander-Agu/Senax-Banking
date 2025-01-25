import React from 'react'
import "./footer.css"
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="contactName">
        <div className="role">
            <h2>ALexander</h2>
            <p>Frontend</p>
        </div>

        <div className="contact">
            <a href="mailto:theonlyagu@gmail.com">
                {<MdEmail />}
            </a>

            <a href="https://github.com/Alexander-Agu">
                {<FaGithub />}
            </a>

            <a href="https://www.linkedin.com/in/alexander-agu-b1968630a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                {<FaLinkedin />}
            </a>
        </div>
    </div>
  )
}

export default Contact