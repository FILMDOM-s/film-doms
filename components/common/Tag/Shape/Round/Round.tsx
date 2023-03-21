import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TagProps } from '../../type'
import { typography, colors, flexCenter } from '@/styles/emotion'

const COLOR_THEME = {
  orange: css`
    border-color: ${colors.primary.orange};
    color: ${colors.primary.orange};
  `,
  default: css`
    border-color: ${colors.grey[100]};
    color: ${colors.grey[100]};
  `,
}

const Round = ({ children, color = 'default' }: TagProps) => {
  return <Box color={color}>{children}</Box>
}

const Box = styled.span<TagProps>`
  ${({ color = 'default' }) => COLOR_THEME[color]}
  ${typography.tag}
  ${flexCenter}

  width: fit-content;
  padding: 8px 14px;
  border-radius: 14px;
  border: 2px solid;
  line-height: 14px;
  letter-spacing: 0.01em;
`

export default Round
