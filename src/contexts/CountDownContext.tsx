import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ChallengesContext } from './ChallengesContext'

interface CountDownContextData {
  isActive: boolean
  minutes: number
  seconds: number
  hasFinished: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountDownProviderProps {
  children: ReactNode
}
export const CountDownContext = createContext({} as CountDownContextData)

let countDownTimeout: NodeJS.Timeout
export function CountDownProvider({ children }: CountDownProviderProps) {
  const minutesLong = 0.1
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(minutesLong * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(minutesLong * 60)
  }

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

  return (
    <CountDownContext.Provider
      value={{
        isActive,
        minutes,
        seconds,
        hasFinished,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}
