import { ComponentMeta, ComponentStory } from '@storybook/react'
import ArticleContainer from './ArticleContainer'

export default {
  title: 'Section/Article',
  component: ArticleContainer,
  argTypes: {
    category: {
      options: ['movie', 'filmUniverse'],
    },
  },
} as ComponentMeta<typeof ArticleContainer>

export const Default: ComponentStory<typeof ArticleContainer> = args => (
  <ArticleContainer {...args} />
)
Default.args = {
  category: 'movie',
}
