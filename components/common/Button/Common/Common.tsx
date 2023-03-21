import styled from '@emotion/styled'
import { colors, typography } from '@/styles/emotion'
import { ButtonProps } from '../type'

const Common = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>
}

const Button = styled.button`
  ${typography.button}
  background-color: ${colors.primary.white};
  border: 2px solid ${colors.primary.black};
  color: ${colors.primary.black};
  width: fit-content;
  padding: 12px 20px;
`

export default Common
