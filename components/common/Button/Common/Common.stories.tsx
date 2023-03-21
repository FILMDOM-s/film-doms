import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ArrowRight } from '@svgs/common'
import { flexCenter, mediaQuery } from '@/styles/emotion'
import Common from './Common'

export default {
  title: 'Common/Button/Common',
  component: Common,
} as ComponentMeta<typeof Common>

export const Default: ComponentStory<typeof Common> = args => (
  <Common {...args}>More</Common>
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
    <Common>
      <FlexBox>
        More <ArrowRight />
      </FlexBox>
    </Common>
    <Common>
      <FlexBox>
        <ArrowRight /> More
      </FlexBox>
    </Common>
    <Common>
      <FlexBox>자세히보기</FlexBox>
    </Common>
  </div>
)

const FlexBox = styled.div`
  ${flexCenter}
  gap: 8px;
`
