import { useQuery } from '@tanstack/react-query'
import queryKeys from '../queryKeys'
import { getNotices } from './apis'

export const useFetchNotices = () => {
  return useQuery(queryKeys.notices, getNotices)
}
