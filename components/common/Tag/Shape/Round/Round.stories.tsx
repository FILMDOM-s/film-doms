import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mediaQuery } from '@/styles/emotion'
import Round from './Round'

export default {
  title: 'Common/Tag/Round',
  component: Round,
} as ComponentMeta<typeof Round>

export const Default: ComponentStory<typeof Round> = args => (
  <Round {...args}>공모전</Round>
)

export const Orange: ComponentStory<typeof Round> = args => (
  <Round {...args}>Editor</Round>
)
Orange.args = {
  color: 'orange',
}

export const List: ComponentStory<typeof Round> = args => (
  <ListBox>
    <Round {...args}>공모전</Round>
    <Round {...args}>동아리</Round>
    <Round {...args}>대외활동</Round>
    <Round {...args} color="orange">
      Editor
    </Round>
    <Round {...args}>Actor</Round>
    <Round {...args}>Director</Round>
    <Round {...args}>Movie</Round>
  </ListBox>
)
List.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
}

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mediaQuery.tablet`
    flex-direction: row;
  `}
`
