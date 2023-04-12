import { css } from '@emotion/react'
import { typography, flexCenter } from '@/styles/emotion'
import { type TagProps, type BaseProps } from '../../type'
import { FILL_COLOR_THEME, OUTLINE_COLOR_THEME } from './colors'

const Round = <T extends As>({
  color = 'default',
  fill = 'false',
  clickable = 'false',
  as,
  children,
  ...props
}: TagProps<T>) => {
  const Element = as ?? 'span'

  return (
    <Element
      css={Box({
        fill,
        color,
        isClickable: clickable === 'true',
      })}
      {...props}
    >
      {children}
    </Element>
  )
}

const Box = ({
  fill,
  color,
  isClickable,
}: Pick<Required<BaseProps>, 'fill' | 'color'> & {
  isClickable: boolean
}) => css`
  ${typography.tag}
  ${flexCenter}
  ${fill === 'true' ? FILL_COLOR_THEME[color] : OUTLINE_COLOR_THEME[color]}
  width: fit-content;
  padding: 8px 14px;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  line-height: 14px;
  letter-spacing: 0.01em;
  ${isClickable && 'cursor: pointer;'}

  &:focus {
    border-width: 3px;
  }
`

export default Round
