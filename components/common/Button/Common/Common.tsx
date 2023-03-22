import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { colors, flexCenter, typography } from '@/styles/emotion'
import { ButtonProps } from '../type'

const Common = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ leftIcon = null, rightIcon = null, children, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {leftIcon}
        {children}
        {rightIcon}
      </Button>
    )
  }
)

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

Common.displayName = 'Button'

export default Common
