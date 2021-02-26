import React from 'react'

import { ThemeProvider } from 'styled-components'

import { RouterContextProvider } from '@/hooks/useRouter'
import { ChallengesProvider } from './ChallengesContext'
import { CountDownProvider } from './CountDownContext'
import { GlobalProvider } from './Global'

import GlobalStyle from '@/styles/GlobalStyle'
import { LightTheme } from '@/styles/theme'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <GlobalProvider>
        <RouterContextProvider>
          <ChallengesProvider>
            <CountDownProvider>{children}</CountDownProvider>
          </ChallengesProvider>
        </RouterContextProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default AppProvider
