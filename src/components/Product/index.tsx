import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { priceBRL } from '../../containers/Cart'

import Button from '../Button'

import * as S from './styles'

export type ModalState = {
  isVisible: boolean
}

const Product = ({
  name,
  price,
  image_url,
  freight,
  discount,
  best_choice,
  product_id
}: Products) => {
  const dispatch = useDispatch()

  const produtos: Products = {
    product_id,
    image_url,
    name,
    price
  }

  const addToCart = () => {
    dispatch(add(produtos))
    dispatch(open())
  }

  return (
    <S.Container>
      <S.Card>
        <S.TagDiscount>
          {discount}
          %<br />
          Off
        </S.TagDiscount>
        {best_choice && (
          <S.TagStatus>
            <p>Melhor escolha</p>
          </S.TagStatus>
        )}
        <div>
          <img src={image_url} alt="imagem do produto" />
          <p>{name}</p>
          <h3>{priceBRL(price)}</h3>
          <p className="deliveryFree">{freight}</p>
        </div>
      </S.Card>
      <Button
        type="button"
        variant="primary"
        title="Comprar"
        onClick={addToCart}
      >
        Comprar
      </Button>
    </S.Container>
  )
}

export default Product
