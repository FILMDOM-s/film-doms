import { rest } from 'msw'
import { POPULAR_DATA } from './data'

export const getPopular = rest.get('/api/popular', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(POPULAR_DATA))
})