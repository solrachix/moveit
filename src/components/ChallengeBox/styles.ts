import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;

  background: ${props => props.theme.colors.background.light};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .challengeActive {
    height: 100%;

    display: flex;
    flex-direction: column;

    header {
      padding: 0 2rem 1.5rem;

      color: ${props => props.theme.colors.primary.normal};
      border-bottom: 1px solid ${props => props.theme.colors.background.dark};

      font-weight: 600;
      font-size: 1.25rem;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        margin: 1.5rem 0 1rem;

        color: ${props => props.theme.colors.text.title};

        font-weight: 600;
        font-size: 2rem;
      }
      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      button {
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: ${props => props.theme.colors.white};

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
        &.challengeFailedButton {
          background: ${props => props.theme.colors.red};
        }
        &.challengeSucceededButton {
          background: ${props => props.theme.colors.green};
        }
      }
    }
  }

  .challengeNotActive {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }
    p {
      max-width: 70%;
      margin-top: 3rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;

      img {
        margin-bottom: 1rem;
      }
    }
  }
`
