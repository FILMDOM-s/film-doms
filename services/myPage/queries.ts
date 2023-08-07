import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import {
  getPublicUserInfo,
  getUserActivityArticle,
  getUserActivityComment,
  getUserInfo,
} from './apis'

export const useFetchUserInfo = () => {
  return useSuspendedQuery(queryKeys.myPage.userInfo, getUserInfo, {})
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
