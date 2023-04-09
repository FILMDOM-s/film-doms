import { css } from '@emotion/react'
import { colors } from '@/styles/emotion'

export const FILL_COLOR_THEME = {
  orange: css`
    color: ${colors.primary.white};
    border-color: ${colors.primary.orange};
    background-color: ${colors.primary.orange};
  `,
  default: css`
    color: ${colors.primary.white};
    border-color: ${colors.primary.black};
    background-color: ${colors.primary.black};
  `,
  white: css`
    color: ${colors.primary.black};
    border-color: ${colors.primary.white};
    background-color: ${colors.primary.white};
  `,
  black: css`
    color: ${colors.primary.white};
    border-color: ${colors.primary.black};
    background-color: ${colors.primary.black};
  `,
}

export const OUTLINE_COLOR_THEME = {
  orange: css`
    color: ${colors.primary.orange};
    border-color: ${colors.primary.orange};
  `,
  default: css`
    color: ${colors.primary.black};
    border-color: ${colors.primary.black};
  `,
  white: css`
    color: ${colors.primary.black};
    border-color: ${colors.primary.white};
  `,
  black: css`
    color: ${colors.primary.black};
    border-color: ${colors.primary.black};
  `,
}
