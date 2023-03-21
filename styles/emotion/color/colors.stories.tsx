import { Fragment } from 'react'
import { css } from '@emotion/react'
import { colors } from '.'
import { typography } from '../typography'
import { flexGap } from '../utils'

export default {
  title: 'StyleGuide/Colors',
}

export const AllColors = () => {
  return (
    <div
      css={css`
        ${flexGap('1rem')}
      `}
    >
      {Object.entries(colors).map(([key, value]) => {
        return (
          <Fragment key={key}>
            <div
              css={css`
                color: ${colors.primary.black};
                ${typography.h5}
              `}
            >
              {key}
            </div>
            {Object.entries(value).map(([key, value]) => {
              return (
                <div
                  key={key}
                  css={css`
                    ${flexGap('1rem')}
                  `}
                >
                  <div
                    css={css`
                      ${typography.contentBody}
                    `}
                  >
                    {key}
                  </div>
                  <div
                    css={css`
                      width: 100%;
                      height: 3rem;
                      background-color: ${value};
                    `}
                  />
                </div>
              )
            })}
          </Fragment>
        )
      })}
    </div>
  )
}
