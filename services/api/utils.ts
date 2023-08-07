import { type AxiosError, type InternalAxiosRequestConfig } from 'axios'

export type DomainType = 'server' | 'msw'

export const getDomain = (type: DomainType) => {
  switch (type) {
    case 'server':
      return 'https://api.filmdoms.studio'
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

export const isTokenError = (error: AxiosError) => {
  const { response } = error
  const data = response?.data

  if ('resultCode' in (data as { resultCode: string })) {
    const { resultCode } = data as { resultCode: string }

    return resultCode === 'TOKEN_NOT_IN_DB' || resultCode === 'TOKEN_NOT_FOUND'
  }

  return false
}

export const isAuthError = (error: AxiosError) => {
  const { response } = error
  const data = response?.data

  if ('resultCode' in (data as { resultCode: string })) {
    const { resultCode } = data as { resultCode: string }

    return resultCode === 'AUTHENTICATION_ERROR'
  }

  return false
}
