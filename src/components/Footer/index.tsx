import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Footer>
      <h3>Contato</h3>
      <p>(67) 0000-0000</p>
      <p>contato@climbshop.com</p>
      <p>{currentYear}&copy;ShopClimb Todos os direitos reservados</p>
    </S.Footer>
  )
}
export default Footer
