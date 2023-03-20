import styled from '@emotion/styled'
import { colors, flexCenter, typography } from '@/styles/emotion'
import { ButtonProps } from '../type'

const Ticket = ({
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
  background-color: ${colors.primary.black};
  color: ${colors.primary.white};
  padding: 12px 22px;
  position: relative;
  width: fit-content;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 50%;
  }
`

export default Ticket
