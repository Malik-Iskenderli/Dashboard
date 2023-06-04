import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { SidebarContextProvider } from './Context/SidebarContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


