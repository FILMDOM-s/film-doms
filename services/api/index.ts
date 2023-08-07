import axios, { type InternalAxiosRequestConfig } from 'axios'
import { type DomainType, getDomain } from './utils'

const createApi = (type: DomainType) => {
  const _api = axios.create({
    baseURL: `${getDomain(type)}`,
  })

  _api.interceptors.request.use(async config => {
    const _config: InternalAxiosRequestConfig = {
      ...config,
      withCredentials: true,
    }

    return _config
  })

  _api.interceptors.response.use(response => {
    return response.data
  })

  return _api
}

const api = createApi('server')

export const mswApi = createApi('msw')

export * from './utils'

export default api
