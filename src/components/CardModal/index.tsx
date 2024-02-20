import { useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'

import closeImg from '../../assets/images/close.svg'

import * as S from './styles'

type Props = {
  children: JSX.Element
}
const CardModal = ({ children }: Props) => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.Container>
      <S.Overlay onClick={closeCart}></S.Overlay>
      <S.Modal>
        <header>
          <img onClick={closeCart} src={closeImg} alt="botão de fechar" />
        </header>
        {children}
      </S.Modal>
    </S.Container>
  )
}

export default CardModal
