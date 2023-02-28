import useSuspendedQuery from '@/hooks/useSuspendedQuery'
import queryKeys from '../queryKeys'
import { getCritics } from './apis'

export const useFetchCritics = () => {
  return useSuspendedQuery(queryKeys.critics, getCritics)
}
