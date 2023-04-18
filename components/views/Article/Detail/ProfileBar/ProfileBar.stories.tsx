import { ComponentMeta } from '@storybook/react'
import ProfileBar from './ProfileBar'

export default {
  component: ProfileBar,
  title: 'Article/Detail/Comment/ProfileBar',
} as ComponentMeta<typeof ProfileBar>

const article: Article.Item = {
  id: 1,
  tag: 'OTT',
  isContainImage: false,
  title: 'title',
  content: 'content',
  createAt: '2021-01-01',
  updateAt: '2021-01-01',
  writer: {
    id: 2,
    nickname: '정우성',
    profile:
      'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/46ca0919-f471-4def-c690-e63ac449af00/public',
  },
  views: 10000,
  likes: 100,
  category: 'movie',
  comments: [],
}

export const Default = () => <ProfileBar article={article} count={2} />
