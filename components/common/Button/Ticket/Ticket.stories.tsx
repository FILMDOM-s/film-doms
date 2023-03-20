import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArrowRight } from '@svgs/common'
import { colors, flexCenter, mediaQuery } from '@/styles/emotion'
import Ticket from './Ticket'

export default {
  title: 'Common/Button/Ticket',
  component: Ticket,
} as ComponentMeta<typeof Ticket>

export const Default: ComponentStory<typeof Ticket> = args => (
  <Ticket {...args}>자세히보기</Ticket>
)
export const List = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      gap: 1rem;

      ${mediaQuery.tablet`
          flex-direction: row;
        `}
    `}
  >
    <Ticket>
      <FlexBox>
        More <ArrowRight fill={colors.primary.white} />
      </FlexBox>
    </Ticket>
    <Ticket>
      <FlexBox>
        <ArrowRight fill={colors.primary.white} /> More
      </FlexBox>
    </Ticket>
    <Ticket>
      <FlexBox>자세히보기</FlexBox>
    </Ticket>
  </div>
)

const FlexBox = styled.div`
  ${flexCenter}
  gap: 8px;
`
