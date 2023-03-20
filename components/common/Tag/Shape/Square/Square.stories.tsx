import { css } from '@emotion/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Square from './Square'
import { mediaQuery } from '@/styles/emotion'

export default {
  title: 'Common/Tag/Square',
  component: Square,
} as ComponentMeta<typeof Square>

export const Default: ComponentStory<typeof Square> = args => (
  <Square {...args}>영화</Square>
)

export const Orange: ComponentStory<typeof Square> = args => (
  <Square {...args}>이벤트</Square>
)
Orange.args = {
  color: 'orange',
}

export const List: ComponentStory<typeof Square> = args => (
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
    <Square {...args}>영화</Square>
    <Square {...args}>OTT 시리즈</Square>
    <Square {...args} color="orange">
      이벤트
    </Square>
    <Square {...args}>드라마</Square>
    <Square {...args}>굿즈</Square>
  </div>
)
List.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
}