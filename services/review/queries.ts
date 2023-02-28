import useSuspendedQuery from '@/hooks/useSuspendedQuery'
import queryKeys from '../queryKeys'
import { getReviews } from './apis'

export const useFetchReviews = () => {
  return useSuspendedQuery(queryKeys.reviews, getReviews)
}
