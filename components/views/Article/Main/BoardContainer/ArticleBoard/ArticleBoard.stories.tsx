import { ComponentMeta } from '@storybook/react'
import { NOTICE_DATA, FILM_UNIVERSE_DATA } from '@/mocks/handlers/article/data'
import ArticleBoard from './ArticleBoard'

export default {
  title: 'Common/Board/ArticleBoard',
  component: ArticleBoard,
} as ComponentMeta<typeof ArticleBoard>

const notices = NOTICE_DATA.slice(0, 2)
const articles = FILM_UNIVERSE_DATA.slice(0, 22)

export const Default = () => {
  return (
    <div style={{ width: '954px' }}>
      <ArticleBoard noticeItems={notices} articleItems={articles} />
    </div>
  )
}
