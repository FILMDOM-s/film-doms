import { useSuspendedQuery } from '@/hooks'
import { getArticleByCategory, getArticleNotice } from './apis'
import queryKeys from '../queryKeys'

export const useFetchArticleByCategory = (
  category: Article.Category,
  params: Article.Params
) => {
  return useSuspendedQuery(queryKeys.articleByCategory(category, params), () =>
    getArticleByCategory(category, params)
  )
}

export const useFetchArticleNotice = () => {
  return useSuspendedQuery(queryKeys.articleNotice, getArticleNotice)
}
