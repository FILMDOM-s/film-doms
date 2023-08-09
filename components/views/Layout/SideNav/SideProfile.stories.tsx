import { ComponentMeta, ComponentStory } from '@storybook/react'
import SideProfile from './SideProfile'

export default {
  component: SideProfile,
  title: 'Layout/Generic/SideProfile',
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof SideProfile>

const Template: ComponentStory<typeof SideProfile> = args => (
  <SideProfile {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isShow: true,
}
