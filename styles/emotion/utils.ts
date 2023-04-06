import { css } from '@emotion/react'
import { CSSProperties } from 'react'

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexGap = (
  gap: string,
  direction: 'column' | 'row' = 'column'
) => css`
  display: flex;
  gap: ${gap};
  flex-direction: ${direction};
`

export const flex = ({
  align = 'stretch',
  justify = 'flex-start',
  direction = 'row',
}: {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
}) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`

export const rotate = (deg: number) => css`
  transform: rotate(${deg}deg);
`

export const font = ({
  size = '16px',
  weight = '500',
  lineHeight = '24px',
  letterSpacing = '0.5px',
}: {
  size?: CSSProperties['fontSize']
  weight?: CSSProperties['fontWeight']
  lineHeight?: CSSProperties['lineHeight']
  letterSpacing?: CSSProperties['letterSpacing']
}) => css`
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
`