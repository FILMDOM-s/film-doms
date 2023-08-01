import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import {
  getPublicUserInfo,
  getUserActivityArticle,
  getUserActivityComment,
  getUserInfo,
} from './apis'
import Cookies from 'js-cookie'

export const useFetchUserInfo = (options?: { enabled?: boolean }) => {
  const token = Cookies.get('accessToken')

  return useSuspendedQuery(queryKeys.myPage.userInfo, getUserInfo, {
    enabled: !!token && options?.enabled,
    ...options,
  })
}

export const useFetchUserActivityArticle = (params: User.Activity.Params) => {
  return useSuspendedQuery(queryKeys.myPage.activityArticle(params), () =>
    getUserActivityArticle(params)
  )
}

export const useFetchUserActivityComment = (params: User.Activity.Params) => {
  return useSuspendedQuery(queryKeys.myPage.activityComment(params), () =>
    getUserActivityComment(params)
  )
}
export const useFetchPublicUserInfo = (
  id: string,
  options?: {
    enabled?: boolean
  }
) => {
  return useSuspendedQuery(
    queryKeys.publicProfile(id),
    () => getPublicUserInfo(id),
    {
      ...options,
    }
  )
}
