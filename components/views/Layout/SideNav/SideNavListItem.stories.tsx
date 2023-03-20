import { ComponentMeta, ComponentStory } from '@storybook/react'
import SideNavListItem from './SideNavListItem'

export default {
  component: SideNavListItem,
  title: 'Layout/Generic/SideNav/Item',
} as ComponentMeta<typeof SideNavListItem>

const Template: ComponentStory<typeof SideNavListItem> = args => (
  <SideNavListItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Home',
  link: '/',
}
