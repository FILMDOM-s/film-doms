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

export const createGoogleAccount = (item: Auth.SignUp.GoogleRequest) => {
  return api.post<null, Auth.SignUp.GoogleResponse, Auth.SignUp.GoogleRequest>(
    '/api/v1/account/oauth',
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

export const getGoogleAccessCode = (state: string) => {
  return api.get<null, Auth.SignIn.DTO>(`/login/oauth2/code/google`, {
    params: {
      state,
    },
  })
}

export const signInAccount = (item: Auth.SignIn.Request) => {
  return api.post<null, Auth.SignIn.DTO, Auth.SignIn.Request>(
    `/api/v1/account/login`,
    item
  )
}

export const signOutAccount = () => {
  return api.post<null, null, null>(`/api/v1/account/logout`, null, {
    withCredentials: true,
  })
}

export const signInGoogle = (code: string) => {
  return api.post<null, Auth.SignIn.DTO>(`/front/oauth2/google`, {
    code,
  })
}

export const findPassword = (item: Auth.FindPassword.Request) => {
  return api.post<null, Auth.FindPassword.Response, Auth.FindPassword.Request>(
    `/api/v1/email/temp-password`,
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
