import api from '../api'

export const createSignUpAccount = (item: Auth.SignUp.Request) => {
  return api.post<null, Auth.SignUp.Response, Auth.SignUp.Request>(
    '/api/v1/account',
    item,
    {
      withCredentials: true,
    }
  )
}

export const getCheckEmailDuplicate = (
  email: Auth.SignUp.CheckEmailDuplicateRequest['email']
) => {
  return api.get<null, Auth.SignUp.CheckEmailDuplicateDTO>(
    `/api/v1/account/check/email?email=${email}`
  )
}

export const signInAccount = (item: Auth.SignIn.Request) => {
  return api.post<null, Auth.SignIn.DTO, Auth.SignIn.Request>(
    `/api/v1/account/login`,
    item
  )
}

export const findPassword = (item: Auth.FindPassword.Request) => {
  return api.post<null, Auth.FindPassword.DTO, Auth.FindPassword.Request>(
    `/api/v1/account/password`,
    item
  )
}

export const sendEmailAuthCode = (
  email: Auth.EmailAuthCode.Request['email']
) => {
  return api.post<
    null,
    Auth.EmailAuthCode.Response,
    Auth.EmailAuthCode.Request
  >(`/api/v1/email/auth-code`, { email })
}

export const getCheckEmailAuthCode = (
  data: Auth.EmailAuthCode.CheckRequest
) => {
  return api.post<
    null,
    Auth.EmailAuthCode.CheckResponse,
    Auth.EmailAuthCode.CheckRequest
  >('/api/v1/email/auth-code/verification', data)
}

export const getCheckNicknameDuplicate = ({
  nickname,
}: Auth.Nickname.CheckRequest) => {
  return api.get<null, Auth.Nickname.CheckResponse>(
    `/api/v1/account/check/nickname?nickname=${nickname}`
  )
}

export const getAccessToken = () => {
  return api.post<null, Auth.Token.Response, null>(
    '/api/v1/account/refresh-token'
  )
}
