import { ChallengesContext } from '@/contexts/ChallengesContext'
import React, { useContext } from 'react'

import { Container } from './styles'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <Container className="profile">
      <img src="https://github.com/solrachix.png" alt="Carlos Miguel" />
      <div>
        <strong>Carlos Miguel</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}

export default Profile
