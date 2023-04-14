import { ComponentMeta } from '@storybook/react'
import CommentItem from './CommentItem'

export default {
  component: CommentItem,
  title: 'Article/Detail/Comment/CommentItem',
} as ComponentMeta<typeof CommentItem>

const commentItem: Comment.Parent = {
  id: 1,
  content: '제가 이번에 관상 2번을 봤는데요. 정말 재밌었어요.',
  status: 'ACTIVE',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  author: {
    id: 2,
    nickname: '이정재',
    profile:
      'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/f61ae2a8-590e-418b-76db-9bca2ae0cb00/public',
  },
  childComments: [
    {
      id: 3,
      content: '정말 재미있는 영화였어요 ㅎㅎ 😆',
      status: 'ACTIVE',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      author: {
        id: 4,
        nickname: '정우성',
        profile:
          'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/46ca0919-f471-4def-c690-e63ac449af00/public',
      },
      managerComment: false,
    },
  ],
  managerComment: false,
  likes: 10,
}

export const Default = () => (
  <CommentItem comment={commentItem} borderBottom={false} />
)
