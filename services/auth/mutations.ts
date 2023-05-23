import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createSignUpAccount,
  getCheckEmailAuthCode,
  getCheckEmailDuplicate,
  sendEmailAuthCode,
} from './apis'

export const useCreateSignUpAccount = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof createSignUpAccount>>,
    unknown,
    Parameters<typeof createSignUpAccount>[0]
  >
) => {
  return useMutation(createSignUpAccount, options)
}

export const useFetchCheckEmailDuplicate = () => {
  return useMutation(getCheckEmailDuplicate)
}

export const useSendEmailAuthCode = () => {
  return useMutation(sendEmailAuthCode)
}

export const useFetchCheckEmailAuthCode = () => {
  return useMutation(getCheckEmailAuthCode)
}
