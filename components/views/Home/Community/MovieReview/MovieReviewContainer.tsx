import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArrowRight } from '@svgs/common'
import { flexGap } from '@/styles/emotion'
import { useFetchReviews } from '@/services/review'
import { Button, Section } from '@/components/common'
import MovieReview from './MovieReview'

const MovieReviewContainer = () => {
  const { push } = useRouter()
  const { data: MovieReviews } = useFetchReviews()

  return (
    <Container>
      <Section.Header
        title="Movie"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/article/movie')}
          >
            More
          </Button>
        }
      />
      <Box>
        {MovieReviews.slice(0, 5).map(movieReview => {
          return (
            <MovieReview
              key={`MovieReview-${movieReview.id}`}
              {...movieReview}
            />
          )
        })}
      </Box>
    </Container>
  )
}

const Box = styled.ul`
  ${flexGap('1.5rem')}
  width: 100%;
`

const Container = styled.div`
  ${flexGap('32px')}
  width: 100%;
  max-width: 600px;
`

export default MovieReviewContainer
