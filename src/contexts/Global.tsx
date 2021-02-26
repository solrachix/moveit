import React, { createContext, useState, useContext, useCallback } from 'react'

import SideBar from '@/components/SideBar'

interface GlobalContextData {
  NavBar: {
    activated: boolean
    set(prop: boolean): void
  }
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [enableNavBar, setEnableNavBar] = useState(true)

  const NavBar = {
    activated: enableNavBar,
    set: useCallback((prop: boolean) => {
      setEnableNavBar(prop)
    }, [])
  }

  return (
    <GlobalContext.Provider value={{ NavBar }}>
      {enableNavBar && <SideBar />}
      {children}
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
