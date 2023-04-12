import { useSuspendedQuery } from '@/hooks'
import { getArticle, getArticleByCategory, getArticleNotice } from './apis'
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

export const useFetchArticleById = (
  id: Article.Item['id'],
  category: Article.Category
) => {
  return useSuspendedQuery(queryKeys.article(id), () =>
    getArticle(id, category)
  )
}
