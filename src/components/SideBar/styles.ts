import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  position: fixed;
  width: 90px;
  height: 100%;

  background: linear-gradient(
    180deg,
    ${props => rgba(props.theme.colors.background.light, 1)},
    ${props => rgba(props.theme.colors.background.light, 0)}
  );
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-rows: 15% 75% 10%;
  grid-template-columns: 100%;

  justify-content: center;
  align-items: center;

  z-index: 9;

  .logo {
    width: 2.6rem;
    margin: auto;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    a {
      width: fit-content;
      margin: 0.6rem 0px;

      img {
        width: 1.8rem;
        height: 1.8rem;

        filter: grayscale(1) opacity(0.5);

        cursor: pointer;
      }

      &.actived {
        &:after {
          position: absolute;
          content: '';
          width: 0.3rem;
          height: 2.4rem;
          left: 0%;

          background: ${props => props.theme.colors.primary.normal};
          border-radius: 0 2rem 2rem 0;
        }
        img {
          filter: grayscale(0) opacity(1);
        }
      }
    }
  }

  .bottomButtons {
    width: 100%;
    padding: 0.4rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      width: 40%;
      background: transparent;
      border: none;

      img {
        width: 100%;

        filter: ${({ theme: { title } }) =>
          title === 'Light'
            ? 'invert(0) opacity(0.8)'
            : 'invert(1) opacity(0.8)'};
      }
    }
  }

  @media (max-width: 520px) {
    width: 100%;
    height: 70px;
    bottom: 0%;

    background: ${props => props.theme.colors.background.light};

    display: flex;

    .logo {
      display: none;
    }

    div {
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      a {
        &.actived:after {
          width: 2.4rem;
          height: 0.3rem;
          bottom: 0%;
          left: auto;
          margin-left: -2rem;
        }
      }
    }
  }
`
