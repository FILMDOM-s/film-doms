import { ComponentMeta } from '@storybook/react'
import { AppLayout } from '@views/Layout'
import HomeContainer from './HomeContainer'

export default {
  component: HomeContainer,
  title: 'Page/Home',
  decorators: [
    Story => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
} as ComponentMeta<typeof HomeContainer>

export const Default = () => <HomeContainer />
