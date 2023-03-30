import styled from '@emotion/styled'
import { ComponentMeta } from '@storybook/react'
import SideNavList from './SideNavList'

export default {
  component: SideNavList,
  title: 'Layout/Generic/SideNav/List',
} as ComponentMeta<typeof SideNavList>

export const Default = () => <SideNavContainer><SideNavList /></SideNavContainer>

const SideNavContainer = styled.div`
  width: 200px;
  height: 100%;
`
