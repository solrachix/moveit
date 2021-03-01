import { ReactNode } from 'react'
import { Provider as AuthProvider } from 'next-auth/client'

import { RouterContextProvider } from '@/hooks/useRouter'
import { ChallengesProvider } from './ChallengesContext'
import { CountDownProvider } from './CountDownContext'
import { GlobalProvider } from './Global'

interface Props {
  children: ReactNode
  ssrPageProps: unknown
}
function AppProvider({ children, ssrPageProps }: Props) {
  return (
    <AuthProvider session={ssrPageProps.session}>
      <GlobalProvider>
        <RouterContextProvider>
          <ChallengesProvider>
            <CountDownProvider>{children}</CountDownProvider>
          </ChallengesProvider>
        </RouterContextProvider>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default AppProvider
