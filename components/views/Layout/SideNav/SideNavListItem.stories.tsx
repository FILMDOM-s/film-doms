import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SideNavListItem from './SideNavListItem'

export default {
  component: SideNavListItem,
  title: 'Layout/Generic/SideNav/Item',
} as ComponentMeta<typeof SideNavListItem>

const Template: ComponentStory<typeof SideNavListItem> = args => (
  <SideNavContainer>
    <SideNavListItem {...args} />
  </SideNavContainer>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Home',
  link: '/',
}

const SideNavContainer = styled.div`
  width: 200px;
  height: 100%;
`
