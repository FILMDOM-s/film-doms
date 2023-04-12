import api from '../api'

export const getDetailComments = (articleId: number, category: string) => {
  return api.get<null, Comment.Parent[]>(
    `/api/article/${category}/${articleId}/comment`
  )
}
