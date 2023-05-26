import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import {
  createSignUpAccount,
  getCheckEmailAuthCode,
  getCheckEmailDuplicate,
  getCheckNicknameDuplicate,
  sendEmailAuthCode,
} from './apis'

export const useCreateSignUpAccount = () => {
  return useMutation(createSignUpAccount, {
    onSuccess: ({ result: { accessToken } }) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    },
  })
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

export const useFetchCheckNicknameDuplicate = () => {
  return useMutation(getCheckNicknameDuplicate)
}
