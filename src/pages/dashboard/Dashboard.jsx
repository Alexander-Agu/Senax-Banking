import React from 'react'
import { GiEntryDoor } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import "./dashboard.css"

function Dashboard() {
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
                        
                    </div>

                    <div className="actBottom">

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