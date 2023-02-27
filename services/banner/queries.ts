import { useQuery } from '@tanstack/react-query'
import queryKeys from '../queryKeys'
import { getBanners } from './apis'

export const useFetchBanners = () => {
  return useQuery(queryKeys.banner, getBanners)
}
