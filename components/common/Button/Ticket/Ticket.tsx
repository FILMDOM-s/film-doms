import styled from '@emotion/styled'
import { colors, typography } from '@/styles/emotion'
import { ButtonProps } from '../type'

const Ticket = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>
}

const Button = styled.button`
  ${typography.button}
  background-color: ${colors.primary.black};
  color: ${colors.primary.white};
  padding: 12px 22px;
  position: relative;
  width: fit-content;

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
