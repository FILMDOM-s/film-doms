import api from '../api'

export const getRecents = () => {
  return api.get<null, Recent[]>('/api/recent')
}
