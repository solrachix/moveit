import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut } from 'next-auth/client'

import { useGlobal } from '@/contexts/Global'

import { Container } from './styles'

const routes = [
  {
    route: '/dashboard',
    icon: 'home.svg'
  },
  {
    route: '/leaderboard',
    icon: 'award.svg'
  }
]
const SideBar: React.FC = () => {
  const router = useRouter()
  const { handleThemeChanges } = useGlobal()

  function handleLogOut() {
    signOut()
  }
  return (
    <Container className="sidebar">
      <img className="logo" src="/icons/logo.svg" />

      <div className="icons">
        {routes.map(props => (
          <Link key={props.route} href={props.route} prefetch>
            <a className={router.pathname === props.route ? 'actived' : ''}>
              <img
                src={`/icons/${props.icon}`}
                alt={`ícone da rota ${router.pathname}`}
              />
            </a>
          </Link>
        ))}
      </div>

      <div className="bottomButtons">
        <button className="logout" type="button" onClick={handleLogOut}>
          <img className="logo" src="/icons/logout.svg" />
        </button>
        <button type="button" onClick={handleThemeChanges}>
          <img className="logo" src="/icons/sun.svg" />
        </button>
      </div>
    </Container>
  )
}

export default SideBar
