import Card from '../../components/Card'
import * as S from './styles'

type Props = {
  products: Products[]
}
const ProductList = ({ products }: Props) => {
  return (
    <S.Container>
      <ul className="container">
        {products.map((item) => (
          <li key={item.product_id}>
            <Card
              product_id={item.product_id}
              name={item.name}
              price={item.price}
              discount={item.discount}
              best_choice={item.best_choice}
              freight={item.freight}
              image_url={item.image_url}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}
export default ProductList
