import Button from '../Button'
import * as S from './styles'

const Card = ({
  name,
  price,
  image_url,
  freight,
  discount,
  best_choice
}: Products) => {
  return (
    <S.Container>
      <S.Card>
        <S.TagDiscount>
          {discount}
          %<br />
          Off
        </S.TagDiscount>
        <S.TagStatus>{best_choice}</S.TagStatus>
        <div>
          <img src={image_url} alt="imagem do produto" />
          <p>{name}</p>
          <h3>{price}</h3>
          <p className="deliveryFree">{freight}</p>
        </div>
      </S.Card>
      <Button title="Comprar" />
    </S.Container>
  )
}

export default Card
