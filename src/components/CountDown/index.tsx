import { useState, useEffect, useContext } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'
import { CountDownContext } from '@/contexts/CountDownContext'

import { Container } from './styles'
const CountDown = () => {
  const {
    isActive,
    minutes,
    seconds,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
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
