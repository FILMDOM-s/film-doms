import React from 'react'

interface IFormErrorProps {
  errorMessage?: string
}

export function FormError({ errorMessage }: IFormErrorProps) {
  return <span role={'alert'}>{errorMessage}</span>
}
