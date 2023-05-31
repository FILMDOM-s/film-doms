import {
  type AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios'

export type DomainType = 'server' | 'msw'

export const getDomain = (type: DomainType) => {
  switch (type) {
    case 'server':
      return 'https://nginx-nginx-4uvg2mlecrl7qe.sel3.cloudtype.app'
    case 'msw':
      return '/'
    default:
      throw new Error('Invalid type')
  }
}

export const getAuthorizationConfig = ({
  token,
  config,
}: {
  token: string
  config: InternalAxiosRequestConfig | undefined
}) => {
  const _config = {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${token}`,
    },
  }

  return _config
}

export const setAuthorization = ({
  instance,
  token,
}: {
  instance: AxiosInstance
  token: string
}) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const isAuthError = (error: AxiosError) => {
  const { response } = error

  return response?.status === 401
}
