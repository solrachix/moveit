import { useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import { Container } from './styles'
import { CountDownContext } from '@/contexts/CountDownContext'

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountDownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
  }
  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }
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
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              className="challengeSucceededButton"
              type="button"
              onClick={handleChallengeSucceeded}
            >
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
