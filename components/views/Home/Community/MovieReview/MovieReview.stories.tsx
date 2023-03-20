import { ComponentMeta, ComponentStory } from '@storybook/react'
import MovieReview from './MovieReview'

export default {
  component: MovieReview,
  title: 'Section/Community/MovieReview/Item',
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof MovieReview>

const Template: ComponentStory<typeof MovieReview> = args => (
  <MovieReview {...args} />
)

export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: '이것은 Movie Review Title입니다.',
  category: 'Category',
  comment: [1, 2, 3],
}
