import { colors } from './../../styles'
import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: 34px 0;

  h3 {
    color: ${colors.white};
    font-size: 25px;
    text-align: center;
  }
  p {
    color: ${colors.white};
    text-align: center;
    margin: 15px;
  }
`
