import { ComponentMeta } from '@storybook/react'
import Notices from './Notices'

export default {
  component: Notices,
  title: 'Section/Notice/List',
} as ComponentMeta<typeof Notices>

export const Default = () => <Notices />
