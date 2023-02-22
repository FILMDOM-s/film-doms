import { css } from '@emotion/react'

const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
}

const createMediaQuery =
  (size: number) =>
  (strings: TemplateStringsArray, ...values: unknown[]) =>
    css`
      @media (min-width: ${size}px) {
        ${String.raw({ raw: strings }, ...values)}
      }
    `

export const mediaQuery = Object.entries(breakpoints).reduce(
  (acc, [device, size]) => {
    return {
      ...acc,
      [device]: createMediaQuery(size),
    }
  },
  {} as Record<keyof typeof breakpoints, ReturnType<typeof createMediaQuery>>
)
