import React, { useState } from 'react'
import "./signup.css"
import { FaArrowRight } from "react-icons/fa6";

function SignUp() {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [name, setName] = useState("");

  return (
    <div className="signupContainer">
        <div className="signRight">
            <div className="signRightWrapper">
                <h2>
                    Join Us Today
                </h2>

                <p>
                    Manage your finances with ease—secure transactions, quick transfers, and real-time account insights, all at your fingertips
                </p>
            </div>
        </div>

        <div className="signLeft">
            <div className="signHeader">
                <button>
                    <FaArrowRight />
                </button>

                <h2>
                    SignUp
                </h2>
            </div>

            <div className="signForm">
                <div className="signInputs">
                    <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder='Name' />
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' />
                    <input type="text" onChange={e => setPasscode(e.target.value)} value={passcode} placeholder='Password' />
                </div>

                <div className="signSubmit">
                    <button>
                        Create Account
                    </button>
                    
                    <p>
                        Already have an account? <a href="#">Login</a> instead.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignUp