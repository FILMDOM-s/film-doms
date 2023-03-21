import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mediaQuery } from '@/styles/emotion'
import Tag from '../../Tag'

export default {
  title: 'Common/Tag/Round',
  component: Tag,
} as ComponentMeta<typeof Tag>

export const Default: ComponentStory<typeof Tag> = args => (
  <Tag {...args}>공모전</Tag>
)
Default.args = {
  shape: 'round',
}

export const Orange: ComponentStory<typeof Tag> = args => (
  <Tag {...args}>Editor</Tag>
)
Orange.args = {
  color: 'orange',
  shape: 'round',
}

export const List: ComponentStory<typeof Tag> = args => (
  <ListBox>
    <Tag shape="round" {...args}>
      공모전
    </Tag>
    <Tag shape="round" {...args}>
      동아리
    </Tag>
    <Tag shape="round" {...args}>
      대외활동
    </Tag>
    <Tag shape="round" {...args} color="orange">
      Editor
    </Tag>
    <Tag shape="round" {...args}>
      Actor
    </Tag>
    <Tag shape="round" {...args}>
      Director
    </Tag>
    <Tag shape="round" {...args}>
      Movie
    </Tag>
  </ListBox>
)
List.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
  shape: {
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
