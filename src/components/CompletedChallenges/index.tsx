import { useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import { Container } from './styles'

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Container className="completedChallengesContainer">
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallenges
