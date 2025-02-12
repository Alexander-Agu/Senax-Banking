import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { GiExtraTime } from "react-icons/gi";
import "./dashboard.css"
import Transfer from '../../components/transfer/Transfer';


function Dashboard() {
  return (
    <main className='dashboardApp'>
        <article className="dashHeader">
            <p>
                <TiThMenu />
            </p>
 
            <h2>Hey Alexander Agu!</h2>
        </article>

        <article className='dashMain'>
            <section className='dashLeft'>
                <div className="leftTop">
                    <h2>
                        Senax Banking
                    </h2>

                    <div className="cardDetails">

                        <div className="balance">
                            <h2>
                                Balance:
                            </h2>

                            <p>
                                R200 000.00
                            </p>
                        </div>

                        <div className="accountNum">
                            <h2>
                                Account Number:
                            </h2>

                            <p>
                                1234 4567 7890
                            </p>
                        </div>
                    </div>
                </div>

                <div className="leftBottom">
                    <div className="row1">
                        <button>
                            <AiFillDollarCircle />
                            <p>Send Cash</p>
                        </button>

                        <button>
                            <BiTransferAlt />
                            <p>Transfer</p>
                        </button>
                    </div>

                    <div className="row2">
                        <button>
                            <FaFileInvoiceDollar />
                            <p>Transections</p>
                        </button>

                        <button>
                            <GiExtraTime />
                            <p>Extra</p>
                        </button>
                    </div>
                </div>
            </section>

            <section className='dashRight'>
                <Transfer />
            </section>

        </article>
    </main>
  )
}

export default Dashboard