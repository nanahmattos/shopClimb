import { colors } from './../../styles'
import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`
export const Card = styled.div`
  position: relative;
  background-color: ${colors.white};
  max-width: 256px;
  width: 100%;
  padding: 64px 23px 0;
  border-radius: 70px 70px 0 0;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 8px;

  .deliveryFree {
    color: ${colors.green};
    margin-bottom: 8px;
  }

  h3 {
    font-size: 24px;
    margin: 8px 0;
  }
  p {
    font-weight: bold;
    font-size: 18px;
  }

  img {
    max-width: 220px;
    margin-bottom: 8px;
  }
`
export const TagDiscount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
`
export const TagStatus = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  background-color: ${colors.orange};
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  border-radius: 0 20px 0 0;
  padding: 10px;
  max-width: 130px;
`
