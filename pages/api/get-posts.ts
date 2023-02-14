// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type postsQuery = {
  skip: number
  take: number
  contains: string
}

async function getPosts({ skip, take, contains }: postsQuery) {
  const containsCondition =
    contains && contains !== ''
      ? {
          name: { contains: contains },
        }
      : undefined

  try {
    return [
      {
        id: 1,
        title: 'title',
        content: 'content',
        createdAt: '2021-08-01',
        updatedAt: '2021-08-01',
      },
    ]
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  status: number
  data?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { skip, take, contains } = req.query
  if (skip == null || take == null) {
    res
      .status(400)
      .json({ status: 200, message: 'Skip이나 Take가 비어있습니다.' })
  }

  try {
    const posts = await getPosts({
      skip: Number(skip),
      take: Number(take),
      contains: contains ? String(contains) : '',
    })
    res.status(200).json({ status: 200, data: posts, message: 'Success' })
  } catch (error) {
    res.status(400).json({ status: 200, message: 'Failed' })
  }
}
