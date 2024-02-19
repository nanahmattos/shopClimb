import { colors } from './../../styles'
import styled from 'styled-components'

export const Header = styled.header`
  padding: 30px 0;
`
export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  h1 {
    color: ${colors.orange};
    font-size: 25px;
  }
  a {
    color: ${colors.black};
    text-decoration: none;
    font-size: 25px;
  }
`
