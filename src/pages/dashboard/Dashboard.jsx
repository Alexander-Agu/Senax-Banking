import React, { useState } from 'react'
import { GiEntryDoor } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import "./dashboard.css"
import Transfer from '../../components/transfer/Transfer';
import TransferReceipt from '../../components/transferReceipt/TransferReceipt';


function Dashboard() {
    let [dashPage, setDashPage] = useState(0);
    let [transferBG, setTransferBG] = useState("black")
    let [transferC, setTransferC] = useState("white")
    let [sendBG, setSendBG] = useState("#d3d3d3")
    let [sendC, setSendC] = useState("black")
    let actionPage;

    function transferPage(){
        setDashPage(0);
        setTransferBG("black");
        setTransferC("white");
        setSendBG("#d3d3d3");
        setSendC("black");
    };

    function sendPage(){
        setDashPage(1);
        setSendBG("black");
        setSendC("white");
        setTransferBG("#d3d3d3");
        setTransferC("black")
    }
    if (dashPage === 0){
        // transferButton.style.backgroundColor = "black";
        // transferButton.style.color = "white";

        // sendButton.style.backgroundColor = "#d3d3d3";
        // sendButton.style.color = "black";

        actionPage = <Transfer />
    } else if (dashPage === 1){
        // sendButton.style.backgroundColor = "black";
        // sendButton.style.color = "white";

        // transferButton.style.backgroundColor = "#d3d3d3";
        // transferButton.style.color = "black";

        actionPage = 0
    }

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
                        <h2 className='actAction'>Actions</h2>
                        <nav className='actionNav'>
                            <button style={{backgroundColor: transferBG, color: transferC}} onClick={()=> transferPage()}>
                                Transfer
                            </button>

                            <button style={{backgroundColor: sendBG, color: sendC}} onClick={()=> sendPage()}>
                                Send Cash
                            </button>
                        </nav>

                        {actionPage}
                    </div>
                </div>


                <div className="dashView">
                    <div className="cardContainer">
                        <p>@</p>

                        <div className="div">
                            <p>**** **** **** 5456</p>
                            <p>879</p>
                        </div>
                    </div>
                </div>


                <div className="dashAction">
                    <TransferReceipt />
                    <TransferReceipt />
                    <TransferReceipt />
                    <TransferReceipt />
                    <TransferReceipt />
                    <TransferReceipt />
                    <TransferReceipt />
                </div>

            </section>
        </article>
    </main>
  )
}

export default Dashboard