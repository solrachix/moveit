import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4.5rem;
    height: 4.5rem;
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
