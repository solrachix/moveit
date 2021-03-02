import { ChallengesContext } from '@/contexts/ChallengesContext'
import React, { useContext } from 'react'

import { useGlobal } from '@/contexts/Global'

import { Container } from './styles'

const Profile: React.FC = () => {
  const { user, NavBar } = useGlobal()
  const { level } = useContext(ChallengesContext)
  if (!user) {
    return <div />
  }

  return (
    <Container className="profile">
      <img src={user.image} alt={`Foto de perfil de ${user.name}`} />
      <div>
        <strong>{user.name}</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
