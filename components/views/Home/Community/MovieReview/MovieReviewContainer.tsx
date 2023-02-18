import { useFetchReviews } from '@/services/review'
import { flexGap } from '@/styles/emotion'
import { css } from '@emotion/react'
import MovieReview from './MovieReview'

const MovieReviewContainer = () => {
  const { data: reviews } = useFetchReviews()

  return (
    <div
      css={css`
        width: 100%;
        ${flexGap('1.5rem')}
      `}
    >
      {reviews.map((review) => {
        return <MovieReview key={review.id} {...review} />
      })}
    </div>
  )
}

export default MovieReviewContainer
