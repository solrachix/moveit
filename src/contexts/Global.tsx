import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback
} from 'react'
import { useSession } from 'next-auth/client'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/GlobalStyle'
import { DarkTheme, LightTheme } from '@/styles/theme'

import SideBar from '@/components/SideBar'
import { useRouter } from 'next/router'

interface User {
  name?: string | null
  email?: string | null
  image?: string | null
}
interface GlobalContextData {
  user: User
  NavBar: {
    activated: boolean
    set(prop: boolean): void
  }
  handleThemeChanges(): void
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

const privateRoutes = ['/dashboard', '/leaderboard']
const publicRoutes = ['/login']

export const GlobalProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [session, loading] = useSession()
  const [enableNavBar, setEnableNavBar] = useState(false)
  const [theme, setTheme] = useState(DarkTheme)
  const [user, setUser] = useState<User | null>(null)

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

  useEffect(() => {
    // console.log(router.pathname, loading)
    if (publicRoutes.includes(router.pathname) && session) {
      router.push('/dashboard')
      setUser(session.user)

      a(session.user)
    } else if (privateRoutes.includes(router.pathname) && !session) {
      setEnableNavBar(false)
      router.push('/')
    } else {
    }
  }, [router.pathname, session])

  useEffect(() => {
    console.log(loading)
  }, [loading])

  return (
    <GlobalContext.Provider value={{ user, NavBar, handleThemeChanges }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {enableNavBar && <SideBar />}
        {!loading && children}
        {/* {children} */}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}

function a(user: User) {
  console.log('entrei')

  fetch('/api/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: user?.email })
  })
    .then(R => R.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
