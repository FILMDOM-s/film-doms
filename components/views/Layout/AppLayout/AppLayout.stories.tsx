import { ComponentMeta } from '@storybook/react'
import AppLayout from './AppLayout'

export default {
  component: AppLayout,
  title: 'Layout/Generic',
} as ComponentMeta<typeof AppLayout>

export const Default = () => {
  return (
    <AppLayout>
      <div>This is Children Content!</div>
    </AppLayout>
  )
}
