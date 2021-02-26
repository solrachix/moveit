import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.2s linear;
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

  @media (max-width: 1080px){
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
    font: 400 1rem 'Inter', 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.normal};
    font-family: 'Inter', 'Roboto', sans-serif;
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
    background: ${({ theme }) => rgba(theme.colors.background.light, 1)};
    border-radius: 50px;
  }
`
