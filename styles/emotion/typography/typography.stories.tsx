import { css } from '@emotion/react'
import { typography } from '.'
import { flexGap } from '../utils'

export default {
  title: 'StyleGuide/Typography',
}

export const AllTypography = () => {
  return (
    <div
      css={css`
        ${flexGap('2rem')}
      `}
    >
      {Object.entries(typography).map(([key, value]) => {
        return (
          <div
            key={key}
            css={css`
              ${flexGap('1rem')}
            `}
          >
            <div css={value}>{key}</div>
            <div>
              <div css={value}>The quick brown fox jumps over the lazy dog</div>
              <div css={value}>다람쥐 헌 쳇바퀴에 타고파</div>
              <div css={value}>1234567890</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
