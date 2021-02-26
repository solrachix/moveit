import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${props => props.theme.colors.primary.normal};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0%;
    left: -5%;
    right: 0%;
    height: 100%;

    background: url('/icons/logo.svg') no-repeat left;
    background-size: 34rem;
    mix-blend-mode: hard-light;

    -webkit-mask-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: left top, left bottom;

    filter: grayscale(1);
  }
`

export const Form = styled.form`
  position: relative;
  max-width: 400px;
  width: 100%;
  height: fit-content;
  right: 4rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 520px) {
    max-width: 90%;
    margin: auto;
    right: 0rem;
  }

  & > img {
    width: 80%;
    margin-bottom: 6rem;
  }

  & > div {
    width: 100%;

    color: ${props => props.theme.colors.white};

    font-family: 'Inter';
    font-weight: 400;

    h2 {
      margin-bottom: 1.6rem;

      font-size: 1.6rem;
      font-weight: 600;

      color: ${props => props.theme.colors.white};
    }

    span {
      width: 70%;
      margin-bottom: 1.8rem;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      p {
        opacity: 0.8;
        line-height: 22px;
      }
    }

    .inputContainer {
      width: 100%;
      height: 70px;

      display: flex;
      input {
        flex: 8;
        width: 100%;
        height: 100%;
        padding: 1rem;

        background: linear-gradient(
          90deg,
          ${props => props.theme.colors.primary.dark},
          ${props => props.theme.colors.primary.normal}
        );
        border-radius: 5px 0 0 5px;
        border: none;

        font-weight: 400;
        &::placeholder {
          color: ${props => props.theme.colors.text.highlight};
        }
      }
      button {
        flex: 2;
        width: 100%;
        height: 100%;

        background: ${props => props.theme.colors.green};

        border-radius: 0 5px 5px 0;
        border: none;

        img {
          width: 1.4rem;
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`
