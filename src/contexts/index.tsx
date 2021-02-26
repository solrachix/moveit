import React from 'react'

import { RouterContextProvider } from '@/hooks/useRouter'
import { ChallengesProvider } from './ChallengesContext'
import { CountDownProvider } from './CountDownContext'
import { GlobalProvider } from './Global'

const AppProvider: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <RouterContextProvider>
        <ChallengesProvider>
          <CountDownProvider>{children}</CountDownProvider>
        </ChallengesProvider>
      </RouterContextProvider>
    </GlobalProvider>
  )
}

export default AppProvider
