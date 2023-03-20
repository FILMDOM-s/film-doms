import { css } from '@emotion/react'

const _typography = {
  h3: {
    'font-size': '40px',
    'font-weight': '700',
  },
  h5: {
    'font-size': '24px',
    'font-weight': '700',
  },
  contentTitle: {
    'font-size': '20px',
    'font-weight': '700',
  },
  contentBodyBold: {
    'font-size': '16px',
    'font-weight': '700',
  },
  contentBody: {
    'font-size': '16px',
    'font-weight': '500',
  },
  tag: {
    'font-size': '14px',
    'font-weight': '700',
  },
  button: {
    'font-size': '16px',
    'font-weight': '700',
  },
}

export const typography = Object.entries(_typography).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: Object.entries(value).reduce(
      (acc, [key, value]) => css`
        ${acc};
        ${key}: ${value};
      `,
      css``
    ),
  }),
  {} as Record<keyof typeof _typography, ReturnType<typeof css>>
)
