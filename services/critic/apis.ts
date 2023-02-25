import api from '../api'

export const getCritics = () => {
  return api.get<null, Critic[]>('/api/critic')
}
