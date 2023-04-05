import styled from '@emotion/styled'
import { typography, flexCenter } from '@/styles/emotion'
import { type TagProps } from '../../type'
import { FILL_COLOR_THEME, OUTLINE_COLOR_THEME } from './colors'

const Square = ({
  children,
  color,
  fill = 'true',
  clickable = 'false',
  onClick,
}: TagProps) => {
  return (
    <Box
      onClick={onClick}
      color={color}
      fill={fill}
      isClickable={clickable === 'true'}
    >
      {children}
    </Box>
  )
}

const Box = styled.span<TagProps & { isClickable: boolean }>`
  ${typography.tag}
  ${flexCenter}

  ${({ fill = 'true', color = 'default' }) =>
    fill === 'true' ? FILL_COLOR_THEME[color] : OUTLINE_COLOR_THEME[color]}

  width: fit-content;
  border: 2px solid;
  padding: 10px 16px;
  line-height: 14px;
  ${({ isClickable }) => (isClickable ? 'cursor: pointer' : `cursor: default`)};
`

export default Square
