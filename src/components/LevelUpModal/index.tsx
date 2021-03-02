import { ReactElement, useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import {} from 'react-icons/'
import { Overlay, Container } from './styles'
import { useSession } from 'next-auth/client'

const LevelUpModal = (): ReactElement => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  const [section] = useSession()

  return (
    <Overlay>
      <Container>
        <div>
          <header>{level}</header>
          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="close modal" />
          </button>
        </div>

        <footer>
          <a
            href={`https://twitter.com/share?url=${process.env.NEXTAUTH_URL}/user/${section.user.email}&text=This is awesome!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhar no Twitter{' '}
            <img src="/icons/twitter.svg" alt="twitter icon" />
          </a>
        </footer>
      </Container>
    </Overlay>
  )
}

export default LevelUpModal
