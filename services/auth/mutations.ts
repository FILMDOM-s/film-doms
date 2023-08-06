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
  signOutAccount,
} from './apis'
import api from '../api'
import Cookies from 'js-cookie'

export const useCreateSignUpAccount = () => {
  return useMutation(createSignUpAccount, {
    onSuccess: ({ result: { accessToken, expiredAt } }) => {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

      Cookies.set('accessToken', accessToken, {
        expires: Number(expiredAt),
      })
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

export const useSignOutAccount = () => {
  return useMutation(signOutAccount)
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

export const useFindPassword = () => {
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
