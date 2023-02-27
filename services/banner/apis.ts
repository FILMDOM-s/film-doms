import api from '../api'

export const getBanners = () => {
  return api.get<null, Banner[]>('/api/banner')
}
