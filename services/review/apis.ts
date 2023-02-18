import api from '../api'

export const getReviews = () => {
  return api.get<null, Review[]>('/api/review')
}
