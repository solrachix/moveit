import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container } from './styles'

const routes = [
  {
    route: '/',
    icon: 'home.svg'
  },
  {
    route: '/Leaderboard',
    icon: 'award.svg'
  }
]
const SideBar: React.FC = () => {
  const router = useRouter()

  return (
    <Container className="sidebar">
      <img className="logo" src="/icons/logo.svg" />

      <div className="icons">
        {routes.map(props => (
          <Link key={props.route} href={props.route}>
            <a className={router.pathname === props.route ? 'actived' : ''}>
              <img
                src={`/icons/${props.icon}`}
                alt={`ícone da rota ${router.pathname}`}
              />
            </a>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default SideBar