import styled from '@emotion/styled'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArrowRight, Instagram, Search } from '@svgs/common'
import { colors, mediaQuery } from '@/styles/emotion'
import { TicketButton } from '..'

export default {
  title: 'Common/Button/Ticket',
  component: TicketButton,
} as ComponentMeta<typeof TicketButton>

export const Default: ComponentStory<typeof TicketButton> = args => (
  <TicketButton {...args}>자세히보기</TicketButton>
)
export const List = () => (
  <ListBox>
    <TicketButton rightIcon={<ArrowRight fill={colors.primary.white} />}>
      More
    </TicketButton>
    <TicketButton leftIcon={<ArrowRight fill={colors.primary.white} />}>
      More
    </TicketButton>
    <TicketButton
      leftIcon={<Instagram fill={colors.primary.white} />}
      rightIcon={<Search fill={colors.primary.white} />}
    >
      자세히보기
    </TicketButton>
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
