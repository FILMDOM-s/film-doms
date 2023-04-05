import { css } from '@emotion/react'
import { colors } from '@/styles/emotion'

export const FILL_COLOR_THEME = {
  default: css`
    color: ${colors.primary.white};
    border-color: ${colors.grey[100]};
    background-color: ${colors.grey[100]};
  `,
  orange: css`
    color: ${colors.primary.white};
    border-color: ${colors.primary.orange};
    background-color: ${colors.primary.orange};
  `,
  white: css`
    color: ${colors.primary.black};
    border-color: ${colors.primary.white};
    background-color: ${colors.primary.white};
  `,
}

export const OUTLINE_COLOR_THEME = {
  default: css`
    color: ${colors.grey[100]};
    border-color: ${colors.grey[100]};
  `,
  orange: css`
    color: ${colors.primary.orange};
    border-color: ${colors.primary.orange};
  `,
  white: css`
    color: ${colors.primary.white};
    border-color: ${colors.primary.white};
  `,
}
