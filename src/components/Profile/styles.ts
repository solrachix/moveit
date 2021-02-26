import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  font-size: 1rem;

  img {
    /* width: 4.5rem; */
    height: 100%;
    border-radius: 50%;
  }

  & > div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;

      color: ${props => props.theme.colors.text.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
    }
  }
`
