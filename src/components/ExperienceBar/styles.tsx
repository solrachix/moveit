import styled from 'styled-components'

interface ProgressBarProps {
  level: number
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  span {
    font-size: 1rem;
  }
`

export const ProgressBarContainer = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.background.dark};
  margin: 0 1.5rem;
  position: relative;
`

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ level }) => level}%;
  height: 4px;
  border-radius: 4px;
  background: ${props => props.theme.colors.green};
`

export const CurrentExperience = styled.div<ProgressBarProps>`
  position: absolute;
  top: 12px;
  left: ${({ level }) => level}%;
  transform: translateX(-50%);
`
