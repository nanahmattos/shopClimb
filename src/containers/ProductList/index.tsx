import Product from '../../components/Product'

import * as S from './styles'

export type Props = {
  products: Products[]
}
const ProductList = ({ products }: Props) => {
  return (
    <S.Container>
      <h2>Produtos</h2>
      <ul className="container">
        {products.map((item) => (
          <li key={item.product_id}>
            <Product
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
