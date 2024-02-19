import * as S from './styles'
import CardModal from '../../components/CardModal'
import imagem from '../../assets/images/mosquetao.jpg'
import check from '../../assets/images/check.svg'
import Button from '../../components/Button'
const Cart = () => {
  return (
    <>
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
          <form>
            <S.InputItems>
              <label htmlFor="">Nome</label>
              <input type="text" />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="">E-mail</label>
              <input type="email" />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="">Telefone</label>
              <input type="text" />
            </S.InputItems>
            <h3>Dados de entrega:</h3>
            <S.Row>
              <S.InputItems>
                <label htmlFor="">CEP</label>
                <input type="text" />
              </S.InputItems>
              <S.InputItems>
                <label htmlFor="">Número</label>
                <input type="text" />
              </S.InputItems>
            </S.Row>
            <S.InputItems>
              <label htmlFor="">Endereço</label>
              <input type="text" />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="">Bairro</label>
              <input type="text" />
            </S.InputItems>
            <S.InputItems>
              <label htmlFor="">Complemento</label>
              <input type="text" />
            </S.InputItems>
            <S.Row>
              <S.InputItems>
                <label htmlFor="">Cidade</label>
                <input type="text" />
              </S.InputItems>
              <S.InputItems>
                <label htmlFor="">Estado</label>
                <input type="text" />
              </S.InputItems>
            </S.Row>
          </form>
          <S.ListItems>
            <h3>Seu carrinho de compras:</h3>
            <ul>
              <S.ProductItem>
                <div>
                  <p>Mosquetão</p>
                  <p>R$10,00</p>
                </div>
                <img src={imagem} alt="imagem do produto" />
              </S.ProductItem>
            </ul>
            <S.TotalPrice>
              <p>Total de produtos:</p>
              <p>R$10,00</p>
            </S.TotalPrice>
            <S.Buttons>
              <Button title="Cancelar" />
              <Button title="Continuar" />
            </S.Buttons>
          </S.ListItems>
        </S.Container>
      </CardModal>
    </>
  )
}

export default Cart
