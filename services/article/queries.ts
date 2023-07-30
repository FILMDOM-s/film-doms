import { useQuery } from '@tanstack/react-query'
import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import {
  getArticleCommentListByCategoryById,
  getArticleDetailContentByCategoryById,
  getArticleListBySearchString,
  getArticleMainContentByCategory,
  getArticleNoticeList,
  getArticleTagListByCategory,
  getPopularArticleList,
} from './apis'

export const useFetchArticleTagListByCategory = (category: string) => {
  return useSuspendedQuery(queryKeys.article.tagDTOByCategory(category), () =>
    getArticleTagListByCategory(category)
  )
}

export const useFetchArticleMainContentByCategory = (
  category: string,
  params: Article.MainContentParams
) => {
  return useSuspendedQuery(
    queryKeys.article.mainContentDTOByCategory(category, params),
    () => getArticleMainContentByCategory(category, params)
  )
}

export const useFetchArticleDetailContentByCategoryById = (
  category: string,
  id: number
) => {
  return useSuspendedQuery(
    queryKeys.article.detailContentDTOByCategoryById(category, id),
    () => getArticleDetailContentByCategoryById(category, id)
  )
}

export const useFetchArticleDetailEdit = (category: string, id: number) => {
  return useQuery(
    queryKeys.article.detailContentDTOByCategoryById(category, id),
    () => getArticleDetailContentByCategoryById(category, id)
  )
}

export const useFetchArticleNoticeList = () => {
  return useSuspendedQuery(queryKeys.article.noticeDTO, getArticleNoticeList)
}

export const useFetchArticleCommentListByCategoryById = (
  category: string,
  id: number
) => {
  return useSuspendedQuery(
    queryKeys.article.commentDTOByCategoryByArticleId(category, id),
    () => getArticleCommentListByCategoryById(category, id)
  )
}

export const useFetchPopularArticleList = () => {
  return useSuspendedQuery(queryKeys.article.popularDTO, getPopularArticleList)
}

export const useFetchSearchArticleList = (
  category: string,
  method: string,
  param: string
) => {
  return useSuspendedQuery(
    queryKeys.article.articleBySearchString(category, method, param),
    () => getArticleListBySearchString(category, method, param)
  )
}
