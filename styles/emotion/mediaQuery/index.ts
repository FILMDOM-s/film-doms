import { css, SerializedStyles } from '@emotion/react'

const breakpoints = {
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  pc: 1440,
}

const addSemicolon = (str: string) => {
  return str.endsWith(';') ? str : `${str};`
}

const isSerializedStyles = (value: unknown): value is SerializedStyles => {
  return (
    !!value &&
    typeof value === 'object' &&
    'name' in value &&
    'map' in value &&
    'next' in value &&
    'styles' in value
  )
}

const createMediaQuery =
  (size: number) =>
  (strings: TemplateStringsArray, ...values: unknown[]) => {
    const serializedValues = values.map((value) =>
      isSerializedStyles(value) ? addSemicolon(value.styles) : value
    )

    return css`
      @media (min-width: ${size}px) {
        ${String.raw({ raw: strings }, ...serializedValues)}
      }
    `
  }

export const mediaQuery = Object.entries(breakpoints).reduce(
  (acc, [device, size]) => {
    return {
      ...acc,
      [device]: createMediaQuery(size),
    }
  },
  {} as Record<keyof typeof breakpoints, ReturnType<typeof createMediaQuery>>
)
