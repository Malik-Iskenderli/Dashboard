import React from "react";
import "./App.css"
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard.jsx"
import Customers from "./Pages/Customers.jsx"
import Products from "./Pages/Products.jsx"
import Statistics from "./Pages/Statistics.jsx"
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header";




function App() {

  const Tabs = [

    {
      path:"/dashboard",
      element: <Dashboard/>,
      name: "Dashboard",
      icon:< i className="bi bi-ui-checks-grid"/>
    },
    {
      path:"/customers",
      element: <Customers/>,
      name: "Customers",
      icon:<i className="bi bi-person-workspace"/>
    },
    {
      path:"/products",
      element: <Products/>,
      name: "Products",
      icon:< i className="bi bi-dropbox"/>
    },
    {
      path:"/statistics",
      element: <Statistics/>,
      name: "Statistics",
      icon:<i className="bi bi-graph-up"/>
    }

  ]
  return (
    <div className="App">
      <Sidebar Tabs={Tabs}/>
      <Header/>


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
  );
}

export default App;
