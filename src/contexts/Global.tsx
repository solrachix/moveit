import React, { createContext, useState, useContext, useCallback } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/GlobalStyle'
import { DarkTheme, LightTheme } from '@/styles/theme'

import SideBar from '@/components/SideBar'

interface GlobalContextData {
  NavBar: {
    activated: boolean
    set(prop: boolean): void
  }
  handleThemeChanges(): void
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [enableNavBar, setEnableNavBar] = useState(false)
  const [theme, setTheme] = useState(DarkTheme)

  const NavBar = {
    activated: enableNavBar,
    set: useCallback((prop: boolean) => {
      setEnableNavBar(prop)
    }, [])
  }

  function handleThemeChanges() {
    console.log(theme.title)
    setTheme(theme.title === 'Light' ? DarkTheme : LightTheme)
  }

  return (
    <GlobalContext.Provider value={{ NavBar, handleThemeChanges }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {enableNavBar && <SideBar />}
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
