import React from 'react'
import "./dashHome.css"
import DashCard from '../dashCard/DashCard'

function DashHome() {
  return (
    <section className='dashHomeApp'>
        <div className="dashCards">
            <h2>Cards</h2>

            <div className="cards">
                <DashCard />
                <DashCard />
                <DashCard />
            </div>
        </div>

        <div className="dashRecentHistory">

        </div>
    </section>
  )
}

export default DashHome