import React, { useState } from 'react'
import './login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");

  return (
    <div className="loginContainer">
        <div className="loginTop">
            <div className="backHome2">
                <a href='http://localhost:5173/'>
                    
                </a>
            </div>
            
            <h1>
                Welcome Back
            </h1>

            <p>
                Manage your finances with ease—secure transactions, quick transfers, and real-time account insights, all at your fingertips
            </p>
        </div>

        <div className="loginBottom">
            <div className="loginForm">
                <div className="loginInputs">
                    <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder='Email' />
                    <input type="text" onChange={e => setPasscode(e.target.value)} value={passcode} placeholder='Password' />

                </div>

                <div className="loginSubmit">
                    <button>
                        Create Account
                    </button>
                    
                    <p>
                        Dont't have an account? <a href="/signup">SignUp</a> Today.
                    </p>
                </div>
            </div>

        </div>

        <div className="loginFooter">

        </div>
    </div>
  )
}

export default Login