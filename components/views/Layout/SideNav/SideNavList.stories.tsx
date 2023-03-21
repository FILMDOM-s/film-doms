import { ComponentMeta } from '@storybook/react'
import SideNavList from './SideNavList'

export default {
  component: SideNavList,
  title: 'Layout/Generic/SideNav/List',
} as ComponentMeta<typeof SideNavList>

export const Default = () => <SideNavList />
