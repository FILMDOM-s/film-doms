import api from '../api'

export const getDetailComments = (articleId: number, category: string) => {
  return api.get<null, Comment[]>(
    `/api/article/${category}/${articleId}/comment`
  )
}
