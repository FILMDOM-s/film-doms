import { useFetchReviews } from '@/services/review'
import { flexGap, flexCenter, mediaQuery } from '@/styles/emotion'
import MovieReview from './MovieReview'
import styled from '@emotion/styled'

const MovieReviewContainer = () => {
  const { data: reviews } = useFetchReviews()
  // 이 부분은 test용 입니다.
  // 모바일에서 5개보다 적거나
  // 태블릿이상에서 10개보다 적을 경우의 디자인이 없어서
  // 임의로 10개 이상이라고 가정합니다.
  const reviewsMobile = [...reviews, ...reviews, ...reviews].slice(0, 5)
  const reviewsOthers = [...reviews, ...reviews, ...reviews].slice(5, 10)

  return (
    <Center>
      <Box>
        {reviewsMobile.map((review, index) => {
          return <MovieReview key={`review-${review.id}${index}`} {...review} />
        })}
      </Box>
      <MobileHiddenBox>
        {reviewsOthers.map((review, index) => {
          return <MovieReview key={`review-${review.id}${index}`} {...review} />
        })}
      </MobileHiddenBox>
    </Center>
  )
}

const MobileHiddenBox = styled.div`
  display: none;

  ${mediaQuery.tablet`
    width: 50%;
    ${flexGap('1.5rem')}
  `}
`

const Box = styled.div`
  width: 50%;
  ${flexGap('1.5rem')}
`

const Center = styled.div`
  width: 100%;

  ${mediaQuery.tablet`
    ${flexCenter}
  `}
`

export default MovieReviewContainer
