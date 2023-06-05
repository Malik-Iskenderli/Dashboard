import React from "react";
import "./App.css"
import Dashboard from "./Pages/Dashboard.jsx"
import Customers from "./Pages/Customers.jsx"
import Products from "./Pages/Products.jsx"
import Statistics from "./Pages/Statistics.jsx"
import Header from "./Components/Header";
import Main from "./Components/Main";
import Page from "./Components/Page";




function App() {

  const Tabs = [

    {
      path: "/dashboard",
      element: <Dashboard />,
      name: "Dashboard",
      icon: < i className="bi bi-ui-checks-grid" />
    },
    {
      path: "/customers",
      element: <Customers />,
      name: "Customers",
      icon: <i className="bi bi-person-workspace" />
    },
    {
      path: "/products",
      element: <Products />,
      name: "Products",
      icon: < i className="bi bi-dropbox" />
    },
    {
      path: "/statistics",
      element: <Statistics />,
      name: "Statistics",
      icon: <i className="bi bi-graph-up" />
    }

  ]
  
  return (
    <div className="App">
      <Main Tabs={Tabs} />

      <div className="header-parents">
        <Header />
        <Page Tabs={Tabs} />
      </div>
    </div>
  );
}

export default App;
