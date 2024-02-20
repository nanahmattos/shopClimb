import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'
import Cart from '../../containers/Cart'

import { useGetProductQuery } from '../../services/api'

const Home = () => {
  const { data: produto } = useGetProductQuery()

  return (
    <>
      <Header />
      <Banner />
      {produto && <ProductList products={produto} />}
      <Cart />
    </>
  )
}

export default Home
