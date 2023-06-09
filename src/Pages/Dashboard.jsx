import React from 'react'
import '../Assets/Dashboard.css'
import Card from "../JSON/dashboardCard.json"
import AppexCharts from '../Pages/AppextChart'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>

      <div className='dashboard-card'>

        <div className='BgCards'>

          {Card.map((item) => (

            <div className='block'>
              <i class={item.icon}></i>
              <div className='card-text'>
                <h3>{item.count}</h3>
                <p>{item.title}</p>
              </div>
            </div>

          ))}
        </div>

        <div>
          <AppexCharts/>
        </div>



      </div>
    </div>
  )
}

export default Dashboard