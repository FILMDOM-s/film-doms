import { flexCenter } from '@/styles/emotion'
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

interface Props extends Required<PropsWithChildren> {
  theme?: 'default'
}

const Badge = ({ children, theme = 'default' }: Props) => {
  return <span css={Theme(theme)}>{children}</span>
}

export default Badge

const Theme = (theme: Props['theme']) => {
  switch (theme) {
    default:
      return css`
        background-color: #f5f5f5;
        color: #666666;
        border-radius: 4px;
        padding: 1px 12px;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        ${flexCenter}
      `
  }
}
