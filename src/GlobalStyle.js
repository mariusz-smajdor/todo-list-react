import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.color.mainText};
    background: ${props => props.theme.color.mainBackground};
  }
`