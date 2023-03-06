import CommunityContainer from './CommunityContainer'
import { ComponentMeta } from '@storybook/react'

export default {
  component: CommunityContainer,
  title: 'Section/Community',
} as ComponentMeta<typeof CommunityContainer>

export const Default = () => <CommunityContainer />
