import { createContext, useState } from "react";
import React from "react";



const SidebarContext = createContext()


export const SidebarContextProvider = ({children}) => {

    const [ sidebar, setSidebar] = useState(true)
    const [openProf, setOpenProf] = useState(true)
    const [openLang, setOpenLang] = useState(true)
    const [openBell, setOpenBell] = useState(true)
    const [openTheme,setOpenTheme] = useState(true)
    const [openColumn, setOpenColumn] = useState(true)
    const [api,setApi] = useState([])
    const [tableHeader,setTableHeader] = useState([])
    const [openModal, setOpenModal] = useState(true);

    const data = {
        sidebar,
        setSidebar,
        openProf,
        setOpenProf,
        openLang,
        setOpenLang,
        openBell,
        setOpenBell,
        openTheme,
        setOpenTheme,
        openColumn,
        setOpenColumn,
        api,
        setApi,
        tableHeader,
        setTableHeader,
        openModal,
        setOpenModal
    }

    return(
        <SidebarContext.Provider value={data}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext