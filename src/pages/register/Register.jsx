import React, { useEffect, useState } from 'react'
import "./register.css"
import Header from '../../components/header/Header'
import Login from '../../components/login/Login'
import SignUp from '../../components/signup/SignUp'

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
            <section className='registerrContainer'>
                {<Header />}

                <div className="registerSL">
                    <nav className='registerNav'>
                        <button style={{
                    backgroundColor: "black", color: "white"}} onClick={() => loginPage()} >Login</button>
                        <button onClick={() => signupPage()}>Sign Up</button>
                    </nav>
                        {<Login />}
                </div>
            </section>
        )
    }
    else if (page === 1){
        return (
            <section className='registerrContainer'>
                {<Header />}

                <div className="registerSL">
                    <nav className='registerNav'>
                        <button onClick={() => loginPage()}>Login</button>
                        <button style={{
                backgroundColor: "black", color: "white"}} onClick={() => signupPage()}>Sign Up</button>
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