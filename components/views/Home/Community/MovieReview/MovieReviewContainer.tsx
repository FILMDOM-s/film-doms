import styled from '@emotion/styled'
import { flexCenter, flexGap } from '@/styles/emotion'
import { useFetchReviews } from '@/services/review'
import { Button, Section } from '@/components/common'
import { ArrowRight } from '@/assets/svgs/common'
import MovieReview from './MovieReview'

const MovieReviewContainer = () => {
  const { data: MovieReviews } = useFetchReviews()

  return (
    <Container>
      <Section.Header
        title="Movie"
        right={
          <Button>
            <ButtonBox>
              More <ArrowRight />
            </ButtonBox>
          </Button>
        }
      />
      <Box>
        {MovieReviews.slice(0, 5).map((movieReview, index) => {
          return (
            <MovieReview
              key={`MovieReview-${movieReview.id}${index}`}
              {...movieReview}
            />
          )
        })}
      </Box>
    </Container>
  )
}

const ButtonBox = styled.div`
  ${flexGap('8px', 'row')};
  ${flexCenter}
`

const Box = styled.div`
  ${flexGap('1.5rem')}
  width: 100%;
`

const Container = styled.div`
  ${flexGap('32px')}
  width: 100%;
  max-width: 600px;
`

export default MovieReviewContainer
