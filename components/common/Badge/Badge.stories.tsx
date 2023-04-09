import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Badge from './Badge'

export default {
  component: Badge,
  title: 'Common/Badge',
} as ComponentMeta<typeof Badge>

export const Default: ComponentStory<typeof Badge> = args => {
  return <Badge {...args}>배지</Badge>
}
Default.args = {
  theme: 'default',
}
