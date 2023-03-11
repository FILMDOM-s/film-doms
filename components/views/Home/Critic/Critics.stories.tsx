import { ComponentMeta } from '@storybook/react'
import Critics from './Critics'

export default {
  component: Critics,
  title: 'Section/Critic/List',
} as ComponentMeta<typeof Critics>

export const Default = () => <Critics />
