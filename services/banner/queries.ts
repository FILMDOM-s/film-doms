import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import { getBanners } from './apis'

export const useFetchBanners = () => {
  return useSuspendedQuery(queryKeys.banner, getBanners)
}
