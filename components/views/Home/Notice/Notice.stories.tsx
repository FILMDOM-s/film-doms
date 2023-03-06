import { ComponentMeta, ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import Notice from './Notice'

export default {
  component: Notice,
  title: 'Section/Notice/Item',
} as ComponentMeta<typeof Notice>

export const Default: ComponentStory<typeof Notice> = args => (
  <Notice {...args} />
)

Default.args = {
  title: '공지사항1',
  image: getMockImage('notice1'),
  startAt: '2023-03-06',
  endAt: '2023-04-06',
}
