import React, { useEffect, useState } from 'react'
import "./register.css"
import Header from '../header/Header'
import Login from '../login/Login'
import SignUp from '../signup/SignUp'

function Register() {
    const [page, setPage] = useState(0)

    const loginPage = ()=>{
        setPage(0)
    }
    const signupPage = ()=> {
        setPage(1)
    }

    if (page === 0){
        return (
            <section className='registerContainer'>
                {<Header />}

                <div className="register">
                <nav className='registerNav'>
                    <button onClick={() => loginPage()}>Login</button>
                    <button onClick={() => signupPage()}>Sign Up</button>
                </nav>
                    {<Login />}
                </div>
            </section>
        )
    }
    else if (page === 1){
        return (
            <section className='registerContainer'>
                {<Header />}

                <div className="register">
                    <nav className='registerNav'>
                        <button onClick={() => loginPage()}>Login</button>
                        <button onClick={() => signupPage()}>Sign Up</button>
                    </nav>
                    {
                    
                    }
                    {<SignUp />}
                </div>
            </section>
        )
    }

}

export default Register