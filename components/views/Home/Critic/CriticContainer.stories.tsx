import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CriticConatiner from './CriticConatiner'

export default {
  component: CriticConatiner,
  title: 'Section/Critic',
} as ComponentMeta<typeof CriticConatiner>

const Template: ComponentStory<typeof CriticConatiner> = () => (
  <Container>
    <CriticConatiner />
  </Container>
)

export const Default = Template.bind({})
const Container = styled.div`
  width: 1280px;
`
