import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TagProps } from '../../type'
import { typography, colors, flexCenter } from '@/styles/emotion'

const COLOR_THEME = {
  orange: css`
    background-color: ${colors.primary.orange};
    color: ${colors.primary.white};
  `,
  default: css`
    background-color: ${colors.primary.black};
    color: ${colors.primary.white};
  `,
}

const Square = ({ children, color = 'default' }: TagProps) => {
  return <Box color={color}>{children}</Box>
}

const Box = styled.span<TagProps>`
  ${({ color = 'default' }) => COLOR_THEME[color]}
  ${typography.tag}
  ${flexCenter}

  width: fit-content;
  padding: 8px;
  line-height: 14px;
`

export default Square
