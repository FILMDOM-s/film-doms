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
    category: {
      control: {
        type: 'radio',
        options: ['영화', '이벤트', 'OTT 시리즈'],
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
  title: '이것은 MovieReview Title 입니다',
  category: '영화',
  comment: [1, 2, 3, 4, 5],
}
