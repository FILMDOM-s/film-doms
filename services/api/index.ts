import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'
import {
  type DomainType,
  getAuthorizationConfig,
  getDomain,
  isAuthError,
  setAuthorization,
  isTokenError,
} from './utils'
import { getAccessToken } from '../auth'
import Cookies from 'js-cookie'
import Router from 'next/router'

const createApi = (type: DomainType) => {
  const token = Cookies.get('accessToken')

  const _api = axios.create({
    baseURL: `${getDomain(type)}`,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })

  _api.interceptors.request.use(async config => {
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
        if (isAuthError(error)) {
          const { config } = error

          try {
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
          } catch (error: any) {
            if (isTokenError(error)) {
              Cookies.remove('accessToken')

              Router.push('/')
            }
          }
        }
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
