import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.gray};

  ul {
    gap: 40px;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
