import { useQuery } from '@tanstack/react-query'
import { getGoogleAccessCode } from './apis'
import api from '../api'

export const useGetGoogleAccessCode = (state: string) => {
  return useQuery(
    ['google'],
    () => {
      getGoogleAccessCode(state)
    },
    {
      onSuccess(data: Auth.SignIn.DTO) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.result.accessToken}`
      },
    }
  )
}
