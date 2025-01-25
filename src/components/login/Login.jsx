import React, { useState } from 'react'
import './login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");

  return (
    <div className="loginContainer">
        <div className="loginWelcome">
            <h2>Senx Banking</h2>
            <p>
                Welcome back, Enter details to get logged into your account
            </p>
        </div>

        <div className="loginInputs">
            <input type="text" onChange={e => {setEmail(e.target.value)}} placeholder='Enter Email' value={(email)} />

            <input type="text" onChange={e => {setPasscode(e.target.value)}} value={passcode} placeholder='Password'/>
        </div>

        <div className="submitLogin">
            <button>
                Login
            </button>
        </div>

        <div className="loginCP">
            <p>
                Copyright @senaxbanking 2025 | Privacy Policy
            </p>
        </div>
    </div>
  )
}

export default Login