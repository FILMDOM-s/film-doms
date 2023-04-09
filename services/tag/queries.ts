import { useSuspendedQuery } from '@/hooks'
import { getTags } from './apis'
import queryKeys from '../queryKeys'

export const useFetchTags = (category: Article.Category) => {
  return useSuspendedQuery(queryKeys.tagsByCategory(category), () =>
    getTags(category)
  )
}
