import close from '../../assets/images/close.svg'

import * as S from './styles'

type Props = {
  children: JSX.Element
}
const CardModal = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Overlay></S.Overlay>
      <S.Modal>
        <header>
          <img src={close} alt="botão de fechar" />
        </header>
        {children}
      </S.Modal>
    </S.Container>
  )
}

export default CardModal
