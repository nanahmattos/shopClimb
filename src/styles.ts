import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E26D00',
  black: '#000',
  white: '#FFF8EF',
  gray: '#CDCDCD',
  green: '#3FA149'
}

export const GlobalCss = createGlobalStyle`

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  list-style: none;
}
`
