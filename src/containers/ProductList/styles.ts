import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.gray};
  padding: 40px;
  h2 {
    text-align: center;
    padding-bottom: 30px;
  }
  ul {
    gap: 40px;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
