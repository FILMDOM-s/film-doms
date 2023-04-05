import styled from '@emotion/styled'
import { typography, flexCenter } from '@/styles/emotion'
import { type TagProps } from '../../type'
import { FILL_COLOR_THEME, OUTLINE_COLOR_THEME } from './colors'

const Round = ({ children, color, fill = 'false', onClick }: TagProps) => {
  return (
    <Box onClick={onClick} color={color} fill={fill} isClickable={!!onClick}>
      {children}
    </Box>
  )
}

const Box = styled.span<TagProps & { isClickable: boolean }>`
  ${typography.tag}
  ${flexCenter}
  ${({ color = 'default', fill }) =>
    fill === 'true' ? FILL_COLOR_THEME[color] : OUTLINE_COLOR_THEME[color]};

  width: fit-content;
  padding: 8px 14px;
  border-radius: 20px;
  border: 2px solid;
  line-height: 14px;
  letter-spacing: 0.01em;
  ${({ isClickable }) => (isClickable ? 'cursor: pointer' : 'cursor: default')};
`

export default Round
