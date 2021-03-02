import { useEffect } from 'react'

import { Container } from '@/styles/pages/Dashboard'

import { useGlobal } from '@/contexts/Global'

import ExperienceBar from '@/components/ExperienceBar'
import Profile from '@/components/Profile'
import CompletedChallenges from '@/components/CompletedChallenges'
import CountDown from '@/components/CountDown'
import SEO from '@/components/SEO'
import ChallengeBox from '@/components/ChallengeBox'

const App: React.FC = () => {
  const { NavBar } = useGlobal()

  useEffect(() => {
    NavBar.set(true)
  }, [])

  return (
    <Container>
      <SEO title="Dashboard" />

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </Container>
  )
}

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies

//   return {
//     props: { user: { level, currentExperience, challengesCompleted } }
//   }
// }

export default App
