import { css } from '@emotion/react'

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
