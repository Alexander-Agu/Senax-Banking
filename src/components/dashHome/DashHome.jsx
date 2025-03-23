import React from 'react'
import "./dashHome.css"
import DashCard from '../dashCard/DashCard'
import TransectionData from '../transectionData/TransectionData'

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
          <h2>Recent Transections</h2>

          <div className="transectCard">
            <TransectionData />
            <TransectionData />
            <TransectionData />
          </div>
        </div>
    </section>
  )
}

export default DashHome