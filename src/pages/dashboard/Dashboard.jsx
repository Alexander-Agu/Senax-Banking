import React from 'react'
import "./dashboard.css"
import Sidebar from '../../components/sidebar/Sidebar'

function Dashboard() {
  return (
    <main className='dashboardApp'>
        <div className="sideNavigation">
            <Sidebar />
        </div>


        <article className='dashboardContainer'>
        ref
        </article>
        
    </main>
  )
}

export default Dashboard