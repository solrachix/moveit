import React, { useContext, useState } from 'react'

import { ChallengesContext } from '@/contexts/ChallengesContext'

import {
  Header,
  ProgressBarContainer,
  ProgressBar,
  CurrentExperience
} from './styles'

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Header>
      <span>0 xp</span>
      <ProgressBarContainer>
        <ProgressBar level={percentToNextLevel} />
        <CurrentExperience level={percentToNextLevel}>
          {currentExperience} xp
        </CurrentExperience>
      </ProgressBarContainer>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  )
}

export default ExperienceBar
