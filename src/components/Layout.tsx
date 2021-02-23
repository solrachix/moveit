import styled from 'styled-components'

export default styled.div`
  /* max-width: 1100px; */
  width: 100%;
  /* max-height: 100vh; 
  margin: 30px auto; */
  margin: 0px auto;
  grid-area: content;

  overflow: auto;

  @media (max-width: 600px) {
    max-height: calc(100vh - 60px);
  }
`
