import api from '../api'

// TODO: SignUpDTO 완성되면 수정
export const createSignUpAccount = (item: Auth.SignUp.Request) => {
  return api.post<null, Auth.SignUp.DTO, Auth.SignUp.Request>(
    '/api/v1/account',
    item
  )
}

export const getCheckEmailDuplicate = (
  email: Auth.SignUp.CheckEmailDuplicateRequest['email']
) => {
  return api.get<null, Auth.SignUp.CheckEmailDuplicateDTO>(
    `/api/v1/account/check/email?email=${email}`
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
