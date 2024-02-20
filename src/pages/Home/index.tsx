import Header from '../../components/Header'
import ProductList from '../../containers/ProductList'
import Cart from '../../containers/Cart'
import { useGetProductsQuery } from '../../services/api'

const Home = () => {
  const { data: produto } = useGetProductsQuery() // Pass identifier here

  return (
    <>
      <Header />
      {produto && <ProductList products={[produto]} />}
      <Cart />
    </>
  )
}

export default Home
