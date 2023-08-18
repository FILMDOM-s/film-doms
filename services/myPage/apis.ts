import { createParams } from '@/utils'
import api from '../api'

export const getUserInfo = async () => {
  const result = await api.get<null, User.InfoDTO>(`/api/v1/account/profile`)

  if (result) {
    return result.result
  }

  return null
}

export const getUserActivityArticle = async (params: User.Activity.Params) => {
  const { result } = await api.get<null, User.Activity.ArticleDTO>(
    `/api/v1/account/profile/article?${createParams(params)}`
  )

  return result
}

export const getUserActivityComment = async (params: User.Activity.Params) => {
  const { result } = await api.get<null, User.Activity.CommentDTO>(
    `/api/v1/account/profile/comment?${createParams(params)}`
  )

  return result
}

export const updateUserProfile = async (params: User.UpdateProfile.Params) => {
  return api.put<null, null, User.UpdateProfile.Params>(
    `/api/v1/account/profile/profileimage`,
    params
  )
}

export const updatePassword = (data: Auth.UpdatePassword.Request) => {
  return api.put<null, null, Auth.UpdatePassword.Request>(
    '/api/v1/account/profile/password',
    data
  )
}

export const updateFavoriteMovie = (data: Auth.UpdateFavoriteMovie.Request) => {
  return api.put<null, null, Auth.UpdateFavoriteMovie.Request>(
    '/api/v1/account/profile/favoritemovie',
    data
  )
}

export const deleteUser = (data: Auth.DeleteUser.Request) => {
  return api.delete<null, null, Auth.DeleteUser.Request>('/api/v1/account', {
    data,
  })
}

export const updateNickname = (data: Auth.UpdateNickname.Request) => {
  return api.put<
    null,
    Auth.UpdateNickname.Response,
    Auth.UpdateNickname.Request
  >('/api/v1/account/profile/nickname', data)
}

export const getPublicUserInfo = async (id: string) => {
  const { result } = await api.get<null, PublicProfile.Response>(
    `/api/v1/account/profile/${id}`
  )

  return result
}
