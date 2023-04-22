import { type ComponentMeta } from '@storybook/react'
import ArticlePopularItem from './ArticlePopularItem'
import { getRandomNum } from '@/utils'

export default {
  title: 'Section/Popular',
  component: ArticlePopularItem,
} as ComponentMeta<typeof ArticlePopularItem>

const articleList: Article.Popular[] = Array.from({ length: 5 }, (_, idx) => ({
  id: idx,
  title: '2023 공모전 정보 모음',
  author: {
    id: 1,
    nickname: '작성자',
  },
  category: 'MOVIE',
  containImage: !!getRandomNum(0, 1),
}))

export const Default = () => {
  return (
    <div>
      {articleList.map((article, idx) => {
        return (
          <ArticlePopularItem
            key={article.id}
            num={idx + 1}
            article={article}
          />
        )
      })}
    </div>
  )
}
