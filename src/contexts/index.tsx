import React from 'react'

import { ThemeProvider } from 'styled-components'

import { RouterContextProvider } from '@/hooks/useRouter'

import GlobalStyle from '@/styles/GlobalStyle'
import { LightTheme } from '@/styles/theme'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <RouterContextProvider>{children}</RouterContextProvider>
    </ThemeProvider>
  )
}

export default AppProvider
