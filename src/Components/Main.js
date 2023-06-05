import React from 'react'
import Sidebar from './Sidebar'
import '../Assets/Main.css'



const Main = ({Tabs}) => {
  return (
    <div className='Main'>
      <Sidebar Tabs={Tabs}/>
    </div>
  )
}

export default Main