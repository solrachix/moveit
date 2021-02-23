import { Container } from '@/styles/pages/Home'

import ExperienceBar from '@/components/ExperienceBar'
import Profile from '@/components/Profile'
import CompletedChallenges from '@/components/CompletedChallenges'
import CountDown from '@/components/CountDown'
import SEO from '@/components/SEO'

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
        <div></div>
      </section>
    </Container>
  )
}

export default App
