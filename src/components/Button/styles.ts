import { colors } from './../../styles'
import styled from 'styled-components'
import { ButtonProps } from './index'

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : colors.black};
  color: ${colors.white};
  font-weight: bold;
  padding: 16px 0;
  width: 100%;
  text-align: center;
  border-radius: 0 0 25px 25px;
  font-size: 22px;
  border: none;
  cursor: pointer;
`
