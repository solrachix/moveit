import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: Rajdhani;
  font-weight: 400;
  color: ${props => props.theme.colors.text.normal};

  & > div {
    width: 100%;
    display: flex;
    align-items: center;

    span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
    & > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: ${props => props.theme.colors.background.light};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
        flex: 1;
        margin: 0;
        &:first-child {
          border-right: 1px solid
            ${props => props.theme.colors.background.normal};
        }
        &:last-child {
          border-left: 1px solid
            ${props => props.theme.colors.background.normal};
        }
      }
    }
  }

  .countdownButton {
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${props => props.theme.colors.primary.normal};
    color: ${props => props.theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    &:not(:disabled):hover {
      background: ${props => props.theme.colors.primary.dark};
    }

    &.active {
      background: ${props => props.theme.colors.background.light};
      color: ${props => props.theme.colors.text.normal};

      &:hover {
        background: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};
      }
    }
    &:disabled {
      background: ${props => props.theme.colors.background.light};
      color: ${props => props.theme.colors.text.normal};
      border-bottom: 3px solid ${props => props.theme.colors.green};

      cursor: not-allowed;
    }
  }
`
