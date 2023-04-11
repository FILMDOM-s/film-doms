import { getRandomNum } from '@/utils'
import { rest } from 'msw'

const extractComment = (extract: number) => {
  return Array.from(new Array<Comment>(extract).keys(), (_, i) => ({
    id: i + 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nis',
    status: 'ACTIVE',
    createdAt: `2023.${i < 9 ? '0' + (i + 1) : i + 1}.01`,
    updatedAt: `2023.${i < 9 ? '0' + (i + 1) : i + 1}.01`,
    author: {
      id: i * 2,
      nickname: 'nickname',
      profile:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    },
    childComments: Array.from(
      new Array<ChildComment>(extract).keys(),
      (_, i) => ({
        id: i + 1,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nis',
        status: 'ACTIVE',
        createdAt: `2023.${i < 9 ? '0' + (i + 1) : i + 1}.01`,
        updatedAt: `2023.${i < 9 ? '0' + (i + 1) : i + 1}.01`,
        author: {
          id: i * 2,
          nickname: 'nickname',
          profile:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
        managerComment: false,
      })
    ),
    managerComment: false,
    likes: 0,
  }))
}

export const getComments = rest.get(
  '/api/article/:category/:articleId/comment',
  (req, res, ctx) => {
    const { category, articleId } = req.params
    // 아티클의 댓글을 가져온다.
    // 아티클이 유효한지 확인한다.
    // 아티클이 유효하지 않다면 404를 반환한다.
    return res(ctx.status(200), ctx.json(extractComment(getRandomNum(1, 12))))
  }
)
