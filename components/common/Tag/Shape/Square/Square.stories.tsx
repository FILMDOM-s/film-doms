import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mediaQuery } from '@/styles/emotion'
import Tag from '../../Tag'

export default {
  title: 'Common/Tag/Square',
  component: Tag,
} as ComponentMeta<typeof Tag>

export const Default: ComponentStory<typeof Tag> = args => (
  <Tag {...args}>영화</Tag>
)

export const Orange: ComponentStory<typeof Tag> = args => (
  <Tag {...args}>이벤트</Tag>
)
Orange.args = {
  color: 'orange',
}

export const List: ComponentStory<typeof Tag> = args => (
  <ListBox>
    <Tag {...args}>영화</Tag>
    <Tag shape="square" {...args}>
      OTT 시리즈
    </Tag>
    <Tag {...args} color="orange">
      이벤트
    </Tag>
    <Tag {...args}>드라마</Tag>
    <Tag {...args}>굿즈</Tag>
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
