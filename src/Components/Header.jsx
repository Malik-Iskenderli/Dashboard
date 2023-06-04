import React, { useContext } from 'react'
import '../Assets/Header.css'
import SidebarContext from '../Context/SidebarContext'
import profileImg from '../Images/profil2.jpg'
const Header = ( {Tabs}) => {

  const { sidebar, setSidebar } = useContext(SidebarContext)
  return (
    <div className='navbar'
    // style={{ marginLeft: sidebar ? "300px" : "60px" }}
    >

      <div className='profile'>
        <div className='prof-img'>
          <img src={profileImg} alt="logo" />
        </div>
        <h4>Malik Isgenderli</h4>
      </div>

      <div className='butn-header'>

        <button>
          <i class="bi bi-arrow-clockwise"></i>
        </button>
        <button>
          <i class="bi bi-bell"></i>
        </button>
        <button>
          <i class="bi bi-palette"></i>
        </button>
      </div>

     




    </div>
  )
}

export default Header