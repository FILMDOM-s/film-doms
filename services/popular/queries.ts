import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import { getArticlePopular } from './apis'

export const useFetchArticlePopular = () => {
  return useSuspendedQuery(queryKeys.articlePopular, getArticlePopular)
}