import { useDispatch } from 'react-redux'
import cart from '../../assets/images/cart.svg'
import { open } from '../../store/reducers/cart'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <div className="container">
      <S.Header>
        <nav>
          <S.Links>
            <li>
              <h1>ClimbShop</h1>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <img src={cart} onClick={openCart} alt="cart" />
          </S.Links>
        </nav>
      </S.Header>
    </div>
  )
}
export default Header
