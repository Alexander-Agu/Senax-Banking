import React, { useState } from 'react';
import "./dashboard.css"


function Dashboard() {
  return (
    <main className='dashboardApp'>
        <article className="dashHeader">
            <p>
                menu
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
                    
                </div>
            </section>

            <section className='dashRight'>

            </section>

        </article>
    </main>
  )
}

export default Dashboard