import { rest } from 'msw'

export const getArticles = rest.get(
  '/api/article/:category',
  (req, res, ctx) => {
    const { category } = req.params

    switch (category) {
      default:
        return res(ctx.status(404))
    }
  }
)

export const getArticle = rest.get(
  '/api/article/:category/:id',
  (req, res, ctx) => {
    const { category } = req.params

    switch (category) {
      default:
        return res(ctx.status(404))
    }
  }
)
