import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticlePopularContainer from './ArticlePopularContainer'

export default {
  title: 'Section/Popular',
  component: ArticlePopularContainer,
} as ComponentMeta<typeof ArticlePopularContainer>

export const Default: ComponentStory<typeof ArticlePopularContainer> = () => (
  <ArticlePopularContainer />
)
Default.args = {}
