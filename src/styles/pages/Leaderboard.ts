import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 820px;
  height: 100%;
  margin: auto;
  margin-top: 2rem;

  h1 {
    margin-bottom: 2rem;

    font-size: 2rem;
    color: ${props => props.theme.colors.text.title};
  }

  .table {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    main {
      width: 100%;
      height: 100%;
      max-height: 75vh;

      display: flow-root;

      overflow: auto;
    }

    .row {
      width: 100%;
      height: 80px;
      margin-bottom: 0.5rem;

      background: ${props => props.theme.colors.background.light};

      display: grid;
      grid-template-columns: 1fr 5fr 2fr 2fr;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      b {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.2rem;
        border-right: 4px solid ${props => props.theme.colors.background.normal};
      }

      p {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        border-left: 4px solid ${props => props.theme.colors.background.normal};

        font-weight: 500;
        i {
          font-style: normal;
          color: ${props => props.theme.colors.primary.light};
        }
      }

      .profile {
        height: 3.4rem;
        margin-left: 1rem;
        & > div {
          margin-left: 1rem;
          strong {
            font-size: 1.2rem;
          }
          p {
            margin-top: 0.3rem;
            font-weight: 400;
            border: none;
            display: block;
            img {
              width: 0.8rem;
              height: 0.8rem;
            }
          }
        }
      }

      &.header {
        height: 50px;
        background: transparent;
        b {
          font-size: 0.8rem;
          font-weight: 700;

          opacity: 0.6;
        }
      }
    }
  }
`
