import { rest } from 'msw'
import { FILM_UNIVERSE_DATA, MOVIE_DATA } from './data'
import { createArticleResponse } from './utils'
import { NOTICE_DATA } from './data/notice'

export const getArticle = rest.get(
  '/api/article/:category',
  (req, res, ctx) => {
    const { category } = req.params
    const page = req.url.searchParams.get('page')
    const limit = req.url.searchParams.get('limit')
    const tag = req.url.searchParams.get('tag')

    switch (category) {
      case 'notice':
        return res(ctx.status(200), ctx.json<Article.Notice[]>(NOTICE_DATA))
      case 'movie':
        return res(
          ctx.status(200),
          ctx.json<Article.Response>(
            createArticleResponse(MOVIE_DATA, { page, limit, tag })
          )
        )
      case 'filmUniverse':
        return res(
          ctx.status(200),
          ctx.json<Article.Response>(
            createArticleResponse(FILM_UNIVERSE_DATA, { page, limit, tag })
          )
        )
      default:
        return res(ctx.status(404))
    }
  }
)
