import * as S from './styles'

type ButtonProps = {
  type?: 'submit' | 'link'
  title: string
  onClick?: () => void
}

const Button = ({ title }: ButtonProps) => {
  return (
    <>
      <S.Button>{title}</S.Button>
    </>
  )
}
export default Button
