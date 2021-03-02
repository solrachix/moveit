import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    margin-top: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media (max-width: 720px) {
      grid-template-columns: 100%;
      grid-auto-rows: 1fr 1fr;
    }
  }
`
