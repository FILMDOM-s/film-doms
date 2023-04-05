import { css } from '@emotion/react'
import { colors } from '@/styles/emotion'

export const FILL_COLOR_THEME = {
  orange: css`
    background-color: ${colors.primary.orange};
    color: ${colors.primary.white};
  `,
  default: css`
    background-color: ${colors.primary.black};
    color: ${colors.primary.white};
  `,
  white: css`
    background-color: ${colors.primary.white};
    color: ${colors.primary.black};
  `,
}

export const OUTLINE_COLOR_THEME = {
  orange: css`
    border-color: ${colors.primary.orange};
    color: ${colors.primary.orange};
  `,
  default: css`
    border-color: ${colors.primary.black};
    color: ${colors.primary.black};
  `,
  white: css`
    border-color: ${colors.primary.white};
    color: ${colors.primary.black};
  `,
}
