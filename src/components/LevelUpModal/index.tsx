import { ReactElement, useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import { Overlay, Container } from './styles'

const LevelUpModal = (): ReactElement => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="close modal" />
        </button>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal
