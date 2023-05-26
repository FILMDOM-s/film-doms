import { type FieldError } from 'react-hook-form'

export const isValidateError = (error: FieldError | undefined) =>
  error?.type === 'validate'

export const isPatternError = (error: FieldError | undefined) =>
  error?.type === 'pattern'

export const getErrorMessage = (error: FieldError | undefined) =>
  error?.message ?? ''
