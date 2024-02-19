import { colors } from './../../styles'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Modal = styled.div`
  background-color: ${colors.white};
  z-index: 1;
  padding: 30px;
  max-width: 1070px;
  width: 100%;
  margin: 40px 0;

  header {
    display: flex;
    justify-content: end;
    img {
      width: 12px;
      cursor: pointer;
    }
`
