import useSuspendedQuery from '@/hooks/useSuspendedQuery'
import queryKeys from '../queryKeys'
import { getNotices } from './apis'

export const useFetchNotices = () => {
  return useSuspendedQuery(queryKeys.notices, getNotices)
}
