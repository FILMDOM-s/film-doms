import { css } from '@emotion/react'
import { typography, flexCenter } from '@/styles/emotion'
import { type TagProps, type BaseProps } from '../../type'
import { FILL_COLOR_THEME, OUTLINE_COLOR_THEME } from './colors'

const Square = <T extends As>({
  color = 'default',
  fill = 'true',
  clickable = 'false',
  as,
  children,
  ...props
}: TagProps<T>) => {
  const Component = as ?? 'span'

  return (
    <Component
      css={Box({
        fill,
        color,
        isClickable: clickable === 'true',
      })}
      {...props}
    >
      {children}
    </Component>
  )
}

const Box = ({
  fill,
  color,
  isClickable,
}: Required<Pick<BaseProps, 'fill' | 'color'>> & {
  isClickable: boolean
}) => css`
  ${typography.tag}
  ${flexCenter}
  ${fill === 'true' ? FILL_COLOR_THEME[color] : OUTLINE_COLOR_THEME[color]}
  width: fit-content;
  border-style: solid;
  border-width: 2px;
  padding: 8px 14px;
  line-height: 14px;
  ${isClickable && 'cursor: pointer;'}

  &:focus {
    border-width: 3px;
  }
`

export default Square
