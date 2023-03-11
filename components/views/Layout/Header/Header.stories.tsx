import { ComponentMeta } from '@storybook/react'
import Header from './Header'

export default {
  component: Header,
  title: 'Layout/Generic/Header',
} as ComponentMeta<typeof Header>

export const Default = () => <Header />
