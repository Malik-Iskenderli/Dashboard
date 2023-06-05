import React from 'react'
import '../Assets/Dashboard.css'
import Card from "../JSON/dashboardCard.json"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard-card'>

        {
          Card.map((item, key) => (

            <div className='BgCards'>

              <div className='cards'>
                <span>
                  <i className={item.icon} />
                </span>
                <div className='count-title'>
                <span>
                  {item.title}
                </span>
                <span>{item.count}</span>
                </div>
              </div>

            </div>

          ))
        }

      </div>
    </div>
  )
}

export default Dashboard