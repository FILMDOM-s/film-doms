import { createParams } from '@/utils'
import api from '../api'

export const getArticleByCategory = (
  category: Article.Category,
  params: Article.Params
) => {
  return api.get<null, Article.Response>(
    `/api/article/${category}?${createParams(params)}`
  )
}

export const getArticleNotice = () => {
  return api.get<null, Article.Notice[]>('/api/article/notice')
}

export const getArticle = (id: Article.Item['id'], category: Article.Category) => {
  return api.get<null, Article.Item>(`/api/article/${category}/${id}`)
}

