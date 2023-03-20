import styled from '@emotion/styled'
import { colors, flexCenter, typography } from '@/styles/emotion'
import { ButtonProps } from '../type'

const Common = ({
  leftIcon = null,
  rightIcon = null,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </Button>
  )
}

const Button = styled.button`
  ${typography.button}
  ${flexCenter}
  gap: 8px;
  background-color: ${colors.primary.white};
  border: 2px solid ${colors.primary.black};
  color: ${colors.primary.black};
  width: fit-content;
  padding: 12px 20px;
`

export default Common
