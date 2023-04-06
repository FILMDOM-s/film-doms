import api from '../api'

export const getTags = (category: Article.Category) => {
  return api.get<null, Tag[]>(`/api/tag/${category}`)
}
