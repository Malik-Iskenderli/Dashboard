import React, { useContext } from 'react'
import '../Assets/Header.css'
import SidebarContext from '../Context/SidebarContext'
import profileImg from '../Images/profil2.jpg'
import profileOpen from "../JSON/Icon.json"
import LanguageIcon from "../JSON/Language.json"
import BellIcon from "../JSON/Bell.json"
const Header = ({ Tabs }) => {

  const {
    openProf, setOpenProf,
    openLang, setOpenLang,
    openBell, setOpenBell,
    openTheme, setOpenTheme
  } = useContext(SidebarContext)



  return (
    <div className='navbar'>

      <div className='profile'>
        <div className='prof-img'
          onClick={() => {
            setOpenProf(!openProf)
          }}
        >
          <img src={profileImg} alt="logo" />



          <div className='icon-open'
            style={{ display: openProf ? "none" : "block" }}
          >

            {
              profileOpen.map((item, key) => (
                <span>
                  <i className={item.icon} />
                  <p>{item.title}</p>
                </span>

              ))
            }

          </div>
        </div>
        <h4>Malik Isgenderli</h4>
      </div>

      <div className='butn-header'>

        <button
          onClick={() => {
            setOpenLang(!openLang)
          }}>
          <i class="bi bi-arrow-clockwise"></i>

          <div className='icon-open-lang'
            style={{ display: openLang ? "none" : "block" }}
          >

            {
              LanguageIcon.map((item, key) => (
                <span>
                  <i className={item.icon} />
                  <p>{item.title}</p>
                </span>

              ))
            }
          </div>
        </button>
        <button
          onClick={() => {
            setOpenBell(!openBell)
          }}>
          <i class="bi bi-bell"></i>
          <div className='icon-open-bell'
            style={{ display: openBell ? "none" : "block" }}
          >
            {
              BellIcon.map((item, key) => (
                <span>
                  <i className={item.icon} />
                  <p>{item.title}</p>
                </span>
              ))
            }
            <button>View All</button>
          </div>
        </button>
        <button
          onClick={() => {
            setOpenTheme(!openTheme)
          }}
        >
          <i class="bi bi-palette"></i>
        </button>
      </div>

      <div className='theme-icon'
        style={{
          display: openTheme ? "none" : "block"
        }}
      >
        <div className='theme-settings-header'>
          <span>Theme Settings</span>
          <button
            onClick={() => {
              setOpenTheme(true)
            }}
          >
            <i class="bi bi-x-octagon"></i>
          </button>
        </div>

        <div className='choose-mood'>
          <h6>Choose mood</h6>
          <div className='dark-light'>
            <div className='light'>
              <div></div>
              <p>Light</p>
            </div>
            <div className='dark'>
              <div></div>
              <p>Dark</p>
            </div>
          </div>
        </div>

        <div className='choose-color'>
          <h6>Choose color</h6>

          <div className='colors'>
            <div className="blue">
              <i className="bi bi-paint-bucket" />
              <span>Blue</span>
            </div>
            <div className="red">
              <i className="bi bi-paint-bucket" />
              <span>Red</span>
            </div>
            <div className="cyan">
              <i className="bi bi-paint-bucket" />
              <span>Cyan</span>
            </div>
            <div className="green">
              <i className="bi bi-paint-bucket" />
              <span>Green</span>
            </div>
            <div className="orange">
              <i className="bi bi-paint-bucket" />
              <span>Orange</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Header