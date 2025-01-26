import React, { useState } from 'react'
import { GiEntryDoor } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import "./dashboard.css"
import Header from '../../components/header/Header';

function Dashboard() {
    const transferButton = document.getElementById("T");
    const sendButton = document.getElementById("S");
    let [dashPage, setDashPage] = useState(0);
    let actionPage;


    if (dashPage === 0){
        transferButton.style.backgroundColor = "black";
        transferButton.style.color = "white";

        sendButton.style.backgroundColor = "#d3d3d3";
        sendButton.style.color = "black";

        actionPage = <Header />
    } else if (dashPage === 1){
        sendButton.style.backgroundColor = "black";
        sendButton.style.color = "white";

        transferButton.style.backgroundColor = "#d3d3d3";
        transferButton.style.color = "black";

        actionPage = 0
    }

    transferButton.onclick = ()=> setDashPage(0);
    sendButton.onclick = ()=> setDashPage(1)

  return (
    <main className='dashboardApp'>
        <nav className='dashSidebar'>
            <a href="#">S-B</a>

            <a href="#">
                Senax Banking
            </a>

            <a href="">
                {<GiEntryDoor />}
            </a>
        </nav>

        <article className='dashboard'>
            <div className="dashIntro">
                <div className="dashMassage">
                    <h2>Hello, Alexander</h2>
                    <p>
                        Welcome to Senax Banking,you all-in-one platform for smarter, simpler financial management!
                    </p>
                </div>

                <div className="dashDate">
                    <p>
                        {<SlCalender />} 25 November 2025
                    </p>
                </div>
            </div>

            <section className='dashboardContainer'>

                <div className="dashActivity">
                    <div className="actTop">
                        <h2>Account Balance</h2>
                        <h2>R2 000 000.00</h2>
                    </div>

                    <div className="actBottom">
                        <h2>Actions</h2>
                        <nav className='actionNav'>
                            <button id='T'>
                                Transfer
                            </button>

                            <button id='S'>
                                Send Cash
                            </button>
                        </nav>

                        {actionPage}
                    </div>
                </div>


                <div className="dashView">

                </div>


                <div className="dashAction">

                </div>

            </section>
        </article>
    </main>
  )
}

export default Dashboard