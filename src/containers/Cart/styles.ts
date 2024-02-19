import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  h3 {
    margin: 20px 0;
    color: ${colors.orange};
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
export const InputItems = styled.div`
  flex: auto;

  label {
    font-weight: bold;
    font-size: 14px;
    margin: 10px;
  }
  input {
    display: block;
    background-color: ${colors.gray};
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 40px;
  }
`
export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  }
`
export const Buttons = styled.div`
  display: inline-flex;
  gap: 10px;
`
export const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 16px 0;

  div {
    p {
      font-weight: bold;
      font-size: 15px;
    }
  }
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const TotalPrice = styled.div`
  text-align: end;
  p {
    color: ${colors.orange};
    font-weight: bold;
    margin-bottom: 10px;
  }
`
export const Checkout = styled.div`
  display: none;
  text-align: center;
  padding: 120px;
  h2,
  h3 {
    margin: 10px;
  }
`
