import * as S from './styles'

export type ButtonProps = {
  type?: 'button' | 'submit'
  variant: 'primary' | 'secondary'
  title: string
  children: string
  onClick?: () => void
}

const Button = ({ title, variant, type, onClick, children }: ButtonProps) => {
  return (
    <>
      <S.Button title={title} variant={variant} type={type} onClick={onClick}>
        {children}
      </S.Button>
    </>
  )
}
export default Button
