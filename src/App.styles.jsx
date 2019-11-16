import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
  }

  html {
    font-size: 62.5%;

    @media only screen and (min-width: 500px) {
      font-size: 65%;
    }

    @media only screen and (min-width: 900px) {
      font-size: 70%;
    }
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`