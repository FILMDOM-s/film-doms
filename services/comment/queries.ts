import useSuspendedQuery from '@/hooks/useSuspendedQuery'
import queryKeys from '../queryKeys'
import { getDetailComments } from './apis'

export const useFetchCommentsByArticle = (
  articleId: Article.Item['id'],
  category: Article.Category
) => {
  return useSuspendedQuery(queryKeys.comments, () =>
    getDetailComments(articleId, category)
  )
}
