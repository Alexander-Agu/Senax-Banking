import React from 'react'
import "./dashboard.css"
import Sidebar from '../../components/sidebar/Sidebar'
import DashHome from '../../components/dashHome/DashHome'

function Dashboard() {
  return (
    <main className='dashboardApp'>
        <div className="sideNavigation">
            <Sidebar />
        </div>


        <article className='dashboardContainer'>
        <DashHome />
        </article>
        
    </main>
  )
}

export default Dashboard