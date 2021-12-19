import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Space Mono', monospace;
  }
  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 500ms linear;
    font-size: 14px;
    font-weight: 400;
  }
`