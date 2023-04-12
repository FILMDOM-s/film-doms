import styled from '@emotion/styled'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArrowRight, Instagram, Search } from '@svgs/common'
import { mediaQuery } from '@/styles/emotion'
import { Button } from '..'

export default {
  title: 'Common/Button/Common',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args}>More</Button>
)

export const List = () => (
  <ListBox>
    <Button rightIcon={<ArrowRight />}>More</Button>
    <Button leftIcon={<ArrowRight />}>More</Button>
    <Button leftIcon={<Instagram />} rightIcon={<Search />}>
      자세히보기
    </Button>
  </ListBox>
)

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mediaQuery.tablet`
    flex-direction: row;
  `}
`
