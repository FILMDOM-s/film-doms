import { ComponentMeta, ComponentStory } from '@storybook/react'
import CriticConatiner from './CriticConatiner'

export default {
  component: CriticConatiner,
  title: 'Section/Critic',
} as ComponentMeta<typeof CriticConatiner>

const Template: ComponentStory<typeof CriticConatiner> = () => (
  <CriticConatiner />
)

export const Default = Template.bind({})
