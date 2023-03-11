import { ComponentMeta, ComponentStory } from '@storybook/react'
import SideNav from './SideNav'

export default {
  component: SideNav,
  title: 'Layout/Generic/SideNav',
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = args => <SideNav {...args} />

export const Default = Template.bind({})
Default.args = {
  isShow: true,
}
