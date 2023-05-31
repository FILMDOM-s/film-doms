import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import {
  type DomainType,
  getAuthorizationConfig,
  getDomain,
  isAuthError,
  setAuthorization,
} from './utils'
import { getAccessToken } from '../auth'

const createApi = (type: DomainType) => {
  const _api = axios.create({
    baseURL: `${getDomain(type)}`,
  })

  _api.interceptors.request.use(config => {
    const _config: InternalAxiosRequestConfig = {
      ...config,
      withCredentials: true,
    }

    return _config
  })

  _api.interceptors.response.use(
    response => {
      return response.data
    },
    async error => {
      if (error instanceof AxiosError) {
        if (!isAuthError(error)) {
          return Promise.reject(error)
        }

        const { config } = error

        const {
          result: { accessToken },
        } = await getAccessToken()

        setAuthorization({
          instance: _api,
          token: accessToken,
        })

        const _config = getAuthorizationConfig({
          token: accessToken,
          config,
        })

        return _api.request(_config)
      }

      return Promise.reject(error)
    }
  )

  return _api
}

const api = createApi('server')

export const mswApi = createApi('msw')

export * from './utils'

export default api
