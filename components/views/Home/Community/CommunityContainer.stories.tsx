import { ComponentMeta } from '@storybook/react'
import CommunityContainer from './CommunityContainer'

export default {
  component: CommunityContainer,
  title: 'Section/Community',
} as ComponentMeta<typeof CommunityContainer>

export const Default = () => <CommunityContainer />
