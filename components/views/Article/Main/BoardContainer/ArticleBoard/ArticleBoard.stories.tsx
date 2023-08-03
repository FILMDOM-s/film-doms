import { type ComponentMeta } from '@storybook/react'
import { FILM_UNIVERSE_DATA } from '@/mocks/handlers/article/data'
import ArticleBoard from './ArticleBoard'

export default {
  title: 'Common/Board/ArticleBoard',
  component: ArticleBoard,
} as ComponentMeta<typeof ArticleBoard>

const articles = FILM_UNIVERSE_DATA.slice(0, 22)

export const Default = () => {
  return (
    <div style={{ width: '954px' }}>
      <ArticleBoard noticeItems={[]} articleItems={articles} />
    </div>
  )
}
