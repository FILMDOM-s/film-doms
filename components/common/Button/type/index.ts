import { HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
