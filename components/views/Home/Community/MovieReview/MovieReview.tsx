import { Badge } from '@/components/common'
import { flexCenter } from '@/styles/emotion'
import cutString from '@/utils'
import { css } from '@emotion/react'

const MovieReview = ({ title, category, comment }: Review) => {
  const cutTitle = cutString(title, 15)
  const cutCategory = cutString(category, 6)

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        gap: 0.5rem;
      `}
    >
      <Badge>{cutCategory}</Badge>
      <div
        css={css`
          ${flexCenter}
        `}
      >
        {cutTitle}
      </div>
      <div
        css={css`
          color: #f0380f;
          font-size: 12px;
          line-height: 18px;
          ${flexCenter}
        `}
      >
        [{comment.length}]
      </div>
    </div>
  )
}

export default MovieReview
