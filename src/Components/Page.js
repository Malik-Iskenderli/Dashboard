import React from 'react'
import { Route, Routes } from 'react-router'

const Page = ({Tabs}) => {
  return (
    <div>
        <Routes>
        {
          Tabs.map((item,key) => (
            <>
              <Route path={item.path} element={item.element}/>
            </>
          ))
        }
      </Routes>
    </div>
  )
}

export default Page