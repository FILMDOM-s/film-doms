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