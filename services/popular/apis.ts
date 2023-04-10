import api from '../api'

export const getArticlePopular = () => {
  return api.get<null, Article.Item[]>('/api/popular')
}
