import { ComponentMeta, ComponentStory } from '@storybook/react'
import { colors } from '@/styles/emotion'
import Divider from './Divider'

export default {
  title: 'Common/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

export const Default: ComponentStory<typeof Divider> = args => {
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Divider {...args} />
    </div>
  )
}

export const Horizontal = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '100px' }}>
        <Divider orientation="horizontal" />
      </div>
      <div style={{ width: '200px' }}>
        <Divider orientation="horizontal" size={4} color={colors.sub.blue} />
      </div>
      <div style={{ width: '300px' }}>
        <Divider orientation="horizontal" size={6} color={colors.sub.green} />
      </div>
      <div style={{ width: '400px' }}>
        <Divider orientation="horizontal" size={8} color={colors.sub.red} />
      </div>
    </div>
  )
}

export const Vertical = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ height: '100px' }}>
        <Divider orientation="vertical" />
      </div>
      <div style={{ height: '200px' }}>
        <Divider orientation="vertical" size={4} color={colors.sub.blue} />
      </div>
      <div style={{ height: '300px' }}>
        <Divider orientation="vertical" size={6} color={colors.sub.green} />
      </div>
      <div style={{ height: '400px' }}>
        <Divider orientation="vertical" size={8} color={colors.sub.red} />
      </div>
    </div>
  )
}
