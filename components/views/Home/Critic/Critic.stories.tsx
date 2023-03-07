import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import Critic from './Critic'

export default {
  component: Critic,
  title: 'Section/Critic/Item',
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    createAt: {
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof Critic>

const Template: ComponentStory<typeof Critic> = args => <Critic {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  image: getMockImage('critic1'),
  tag: '영화',
  title: '영화의 제목입니다.',
  createAt: '2023-03-06',
}
