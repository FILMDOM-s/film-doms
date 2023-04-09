import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CriticContainer from './CriticContainer'

export default {
  component: CriticContainer,
  title: 'Section/Critic',
} as ComponentMeta<typeof CriticContainer>

const Template: ComponentStory<typeof CriticContainer> = () => (
  <Container>
    <CriticContainer />
  </Container>
)

export const Default = Template.bind({})
const Container = styled.div`
  width: 1280px;
`
