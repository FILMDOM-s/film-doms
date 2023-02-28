import useSuspendedQuery from '@/hooks/useSuspendedQuery'
import queryKeys from '../queryKeys'
import { getRecents } from './apis'

export const useFetchRecents = () => {
  return useSuspendedQuery(queryKeys.recents, getRecents)
}
