import { ComponentMeta } from '@storybook/react'
import RecentContainer from './RecentContainer'

export default {
  component: RecentContainer,
  title: 'Section/Community/Recent/List',
} as ComponentMeta<typeof RecentContainer>

export const Default = () => <RecentContainer />
