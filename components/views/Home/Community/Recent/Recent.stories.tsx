import { ComponentMeta, ComponentStory } from '@storybook/react'
import Recent from './Recent'

export default {
  component: Recent,
  title: 'Section/Community/Recent/Item',
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Recent>

const Template: ComponentStory<typeof Recent> = args => <Recent {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: '이것은 Recent Title 입니다',
  category: 'Category',
  comment: [1, 2, 3, 4, 5],
}
