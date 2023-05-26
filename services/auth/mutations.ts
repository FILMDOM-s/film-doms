import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createSignUpAccount,
  getCheckEmailDuplicate,
  signInAccount,
  findPassword,
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

export const useSignInAccount = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof signInAccount>>,
    unknown,
    Parameters<typeof signInAccount>[0]
  >
) => {
  return useMutation(signInAccount, options)
}

export const useFindPassword = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof signInAccount>>,
    unknown,
    Parameters<typeof signInAccount>[0]
  >
) => {
  return useMutation(findPassword)
}
