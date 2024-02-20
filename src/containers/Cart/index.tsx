import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import check from '../../assets/images/check.svg'

import CardModal from '../../components/CardModal'
import Button from '../../components/Button'

import * as S from './styles'

export const priceBRL = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = (items: Products[]) => {
    return items.reduce((soma, ValorAtual) => {
      return (soma += ValorAtual.price)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      street_number: '',
      street: '',
      district: '',
      city: '',
      state: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string().required('O campo é obrigatório'),
      phone_number: Yup.string()
        .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 'Formato de telefone inválido')
        .required('O campo é obrigatório'),
      street_number: Yup.string().required('O campo é obrigatório'),
      street: Yup.string().required('O campo é obrigatório'),
      district: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      state: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <S.Cart className={isOpen ? 'is-open' : ''}>
      <CardModal>
        <S.Checkout>
          <img src={check} alt="pedido realizado" />
          <h2>Pedido realizado com sucesso!</h2>
          <h3>Número do pedido #1234 - </h3>
          <p>
            Agradecemos por escolher a nossa loja. Seu pedido está sendo
            processado e você em breve receberá um e-mail de confirmação com os
            detalhes da entrega. Se precisar de qualquer assistência, não hesite
            em nos contatar. Esperamos que você aproveite seus produtos e tenha
            uma excelente experiência de compra conosco. Volte sempre!
          </p>
        </S.Checkout>
      </CardModal>
      <CardModal>
        <S.Container>
          <form onSubmit={form.handleSubmit}>
            <S.InputItems>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
              />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
              />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="phone_number">Telefone</label>
              <InputMask
                id="phone_number"
                type="text"
                name="phone_number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.phone_number}
                mask="(99) 99999-9999"
              />
            </S.InputItems>
            <h3>Dados de entrega:</h3>
            <S.Row>
              <S.InputItems>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </S.InputItems>
              <S.InputItems>
                <label htmlFor="street_number">Número</label>
                <input
                  id="street_number"
                  type="text"
                  name="street_number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.street_number}
                />
              </S.InputItems>
            </S.Row>
            <S.InputItems>
              <label htmlFor="street">Endereço</label>
              <input
                id="street"
                type="text"
                name="street"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.street}
              />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="district">Bairro</label>
              <input
                id="district"
                type="text"
                name="district"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.district}
              />
            </S.InputItems>
            <S.Row>
              <S.InputItems>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.city}
                />
              </S.InputItems>
              <S.InputItems>
                <label htmlFor="state">Estado</label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.state}
                />
              </S.InputItems>
            </S.Row>
          </form>
          <S.ListItems>
            <h3>Seu carrinho de compras:</h3>
            <ul>
              {items.map((item) => (
                <S.ProductItem key={item.product_id}>
                  <div>
                    <p>{item.name}</p>
                    <p>{priceBRL(item.price)}</p>
                  </div>
                  <img src={item.image_url} alt={item.name} />
                </S.ProductItem>
              ))}
            </ul>
            <S.TotalPrice>
              <p>Total de produtos:</p>
              <p>{priceBRL(getTotalPrice(items))}</p>
            </S.TotalPrice>
            <S.Buttons>
              <Button variant="secondary" title="Cancelar">
                Cancelar
              </Button>
              <Button
                type="submit"
                onClick={form.handleSubmit}
                variant="primary"
                title="Confirmar"
              >
                Confirmar compra
              </Button>
            </S.Buttons>
          </S.ListItems>
        </S.Container>
      </CardModal>
    </S.Cart>
  )
}

export default Cart
