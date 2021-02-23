import React, { useState } from 'react'
import {
  Header,
  ProgressBarContainer,
  ProgressBar,
  CurrentExperience
} from './styles'

const ExperienceBar: React.FC = () => {
  const [level, setLevel] = useState(90)

  return (
    <Header>
      <span>0 xp</span>
      <ProgressBarContainer>
        <ProgressBar level={level} />
        <CurrentExperience level={level}>{level} xp</CurrentExperience>
      </ProgressBarContainer>
      <span>600 xp</span>
    </Header>
  )
}

export default ExperienceBar
