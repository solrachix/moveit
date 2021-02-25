import { useState, useEffect, useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import { Container } from './styles'

let countDownTimeout: NodeJS.Timeout

const CountDown = ({ minutesLong = 0.1 }) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(minutesLong * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  function startCountdown() {
    clearTimeout(countDownTimeout)
    setIsActive(true)
    setTime(minutesLong * 60)
  }

  function resetCountdown() {
    setIsActive(false)
  }
  return (
    <Container className="countdownContainer">
      <div>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className="countdownButton">
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className="countdownButton active"
              onClick={resetCountdown}
            >
              Abandonar um ciclo
            </button>
          ) : (
            <button
              type="button"
              className="countdownButton"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </Container>
  )
}
export default CountDown
