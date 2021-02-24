import { useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import { Container } from './styles'

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <Container>
      {activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className="challengeFailedButton"
              type="button"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button className="challengeSucceededButton" type="button">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </Container>
  )
}

export default ChallengeBox
