import { ComponentMeta, ComponentStory } from '@storybook/react'
import Nav from './Nav'

export default {
  component: Nav,
  title: 'Section/Nav/Item',
} as ComponentMeta<typeof Nav>

export const Default: ComponentStory<typeof Nav> = args => <Nav {...args} />
Default.args = {
  text: 'Home',
  link: '/',
}
