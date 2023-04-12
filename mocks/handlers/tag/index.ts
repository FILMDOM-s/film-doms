import { rest } from 'msw'
import { TAG_DATA } from './data'

export const getTag = rest.get('/api/tag/:category', (req, res, ctx) => {
  const { category } = req.params

  switch (category) {
    case 'movie':
      return res(ctx.status(200), ctx.json<Tag[]>(TAG_DATA.movie))
    case 'filmUniverse':
      return res(ctx.status(200), ctx.json<Tag[]>(TAG_DATA.filmUniverse))
    default:
      return res(ctx.status(404))
  }
})
