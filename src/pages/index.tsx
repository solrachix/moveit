import { GetServerSideProps } from 'next'

import { Container } from '@/styles/pages/Home'

import ExperienceBar from '@/components/ExperienceBar'
import Profile from '@/components/Profile'
import CompletedChallenges from '@/components/CompletedChallenges'
import CountDown from '@/components/CountDown'
import SEO from '@/components/SEO'
import ChallengeBox from '@/components/ChallengeBox'

const App: React.FC = () => {
  return (
    <Container>
      <SEO title="Inicio" />

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
