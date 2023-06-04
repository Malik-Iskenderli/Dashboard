import React, { useContext, useState } from 'react'
import "../Assets/Sidebar.css"
import Logo from "../Images/Logo.png"
import { Link, Route, Routes } from 'react-router-dom'
import SidebarContext from '../Context/SidebarContext'

const Sidebar = ({ Tabs }) => {

const {sidebar, setSidebar} = useContext(SidebarContext)

  const Click = () =>{
    setSidebar(!sidebar)
  }

  return (
    <div className='sidebar' 
    style={{ width: sidebar ? "300px" : "60px"}}>

      

      <div className="logo-sidebar">
        <img src={Logo} alt="Logo" 
        style={{display: sidebar ? 'block' : 'none'}} />
        <button 
        onClick={Click}
        style={{marginLeft: sidebar ? "1rem" : "0"}}
        >
          { sidebar ? <i class="bi bi-filter-right"></i> : <i class="bi bi-filter-left"></i>}
        </button>
      </div>

      <div className="pages">
        <ul 
        style={{paddingLeft: sidebar ? "2rem" : "1rem"}}
        >
          {
            Tabs.map((item, key) => {
              return (
                <li>
                  <Link to={item.path}>
                    {item.icon}
                    <span 
                    style={{display: sidebar ? 'block' : 'none'}}
                    >  {item.name}</span>
                  </Link>

                </li>
              )
            })
          }
        </ul>
      </div>

      
     

    </div>
  )
}

export default Sidebar