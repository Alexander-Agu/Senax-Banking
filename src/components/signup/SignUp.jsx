import React, { useState } from 'react'
import "./signup.css"

function SignUp() {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [name, setName] = useState("");

  return (
    <div className="signupContainer">
        <div className="signupWelcome">
            <h2>Senx Banking</h2>
            <p>
                Want to join us, Enter details to create an account
            </p>
        </div>

        <div className="signupInputs">
            <input type="text" onChange={e => {setEmail(e.target.value)}} placeholder='Enter Email' value={(email)} />

            <input type="text" onChange={e => {setPasscode(e.target.value)}} value={passcode} placeholder='password'/>

            <input type="text" onChange={e => {setName(e.target.value)}} value={passcode} placeholder='Full Names'/>
        </div>

        <div className="submitsignup">
            <button>
                signup
            </button>
        </div>

        <div className="signupCP">
            <p>
                Copyright @senaxbanking 2025 | Privacy Policy
            </p>
        </div>
    </div>

  )
}

export default SignUp