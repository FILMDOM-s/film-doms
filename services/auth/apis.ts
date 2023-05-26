import api from '../api'

// TODO: SignUpDTO 완성되면 수정
export const createSignUpAccount = (item: Auth.SignUp.Request) => {
  return api.post<null, Auth.SignUp.DTO, Auth.SignUp.Request>(
    '/api/v1/account',
    item
  )
}

export const getCheckEmailDuplicate = ({
  email,
}: Auth.SignUp.CheckEmailDuplicateRequest) => {
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
