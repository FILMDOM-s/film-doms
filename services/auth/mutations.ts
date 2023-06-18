import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createSignUpAccount,
  getCheckEmailAuthCode,
  getCheckEmailDuplicate,
  getCheckNicknameDuplicate,
  sendEmailAuthCode,
  signInAccount,
  findPassword,
  signInGoogle,
  createGoogleAccount,
} from './apis'
import api from '../api'

export const useCreateSignUpAccount = () => {
  return useMutation(createSignUpAccount, {
    onSuccess: ({ result: { accessToken } }) => {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    },
  })
}

export const useCreateGoogleAccount = () => {
  return useMutation(createGoogleAccount, {})
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

export const useSignInGoogle = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof signInGoogle>>,
    unknown,
    Parameters<typeof signInGoogle>[0]
  >
) => {
  return useMutation(signInGoogle, options)
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

export const useSendEmailAuthCode = () => {
  return useMutation(sendEmailAuthCode)
}

export const useFetchCheckEmailAuthCode = () => {
  return useMutation(getCheckEmailAuthCode)
}

export const useFetchCheckNicknameDuplicate = () => {
  return useMutation(getCheckNicknameDuplicate)
}
