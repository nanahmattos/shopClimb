import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'
import imagem from '../../assets/images/mosquetao.jpg'
import Cart from '../../containers/Cart'

const produtos: Products[] = [
  {
    product_id: 1,
    name: 'Mosquetão',
    price: 49.99,
    discount: 10,
    best_choice: true,
    freight: 'Frete grátis',
    image_url: `${imagem}`
  },
  {
    product_id: 2,
    name: 'Mosquetão',
    price: 49.99,
    discount: 10,
    best_choice: true,
    freight: 'Frete grátis',
    image_url: `${imagem}`
  },
  {
    product_id: 3,
    name: 'Mosquetão',
    price: 49.99,
    discount: 10,
    best_choice: true,
    freight: 'Frete grátis',
    image_url: `${imagem}`
  },
  {
    product_id: 4,
    name: 'Mosquetão',
    price: 49.99,
    discount: 10,
    best_choice: true,
    freight: 'Frete grátis',
    image_url: `${imagem}`
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductList products={produtos} />
      <Cart />
    </>
  )
}

export default Home
