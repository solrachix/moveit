import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;

    background: ${props => props.theme.colors.background.normal};
    color: ${props => props.theme.colors.text.normal};

    overflow-x: visible;
  }

  #__next {
    display: grid;
    grid-template-columns: 60px calc(100% - 60px);
    grid-template-rows: 100%;
    grid-template-areas: 
      'navbar content';

      @media (max-width: 600px) {
        grid-template-columns: 100%;
        grid-template-rows: calc(100% - 60px) 60px;
        grid-template-areas: 
          'content'
          'navbar';

          .sidebar {
            display: none;
          }
      }
      
      &.navbar-false {
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        grid-template-areas: 
          'content';

          @media (max-width: 600px) {
            grid-template-columns: 100%;
            grid-template-rows: 100%;
            grid-template-areas: 
              'content';
          }
      }

  }

  @media (max-width: 1088px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }


  body, input, textarea, button, select, a {
    color: inherit;
    outline: none;

    text-decoration: none;
    font: 400 1rem 'Nunito', 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.normal};
    font-family: 'Nunito', 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none; 
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.colors.background.normal};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => rgba(theme.colors.background.lighter, 1)};
    border-radius: 50px;
  }
`
