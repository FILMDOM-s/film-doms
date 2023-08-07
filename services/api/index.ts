import { toast } from 'react-hot-toast'
import axios, { AxiosError } from 'axios'
import { type DomainType, getDomain, isAuthError } from './utils'
import { getAccessToken } from '../auth'

const createApi = (type: DomainType) => {
  const _api = axios.create({
    baseURL: `${getDomain(type)}`,
    withCredentials: true,
  })

  _api.interceptors.response.use(
    response => {
      return response.data
    },
    async error => {
      if (error instanceof AxiosError) {
        if (isAuthError(error)) {
          try {
            const res = await getAccessToken()

            if (!res) {
              return
            }

            toast.success('로그인 되었습니다.')
            return
          } catch (error: any) {
            Promise.reject(error)
          }
        }
      }
    }
  )

  return _api
}

const api = createApi('server')

export const mswApi = createApi('msw')

export * from './utils'

export default api
