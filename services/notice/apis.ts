import api from '../api'

export const getNotices = () => {
  return api.get<null, Notice[]>('/api/notice')
}
