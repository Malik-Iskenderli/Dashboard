import { createContext, useState } from "react";
import React from "react";


const SidebarContext = createContext()


export const SidebarContextProvider = ({children}) => {

    const [ sidebar, setSidebar] = useState(true)

    const data = {
        sidebar,
        setSidebar
    }

    return(
        <SidebarContext.Provider value={data}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext