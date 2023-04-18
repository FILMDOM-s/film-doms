import { Suspense } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'
import { Loading } from '@/components/common'
import MovieReviewContainer from './MovieReview'
import RecentContainer from './Recent'

const CommunityContainer = () => {
  return (
    <Section>
      <Suspense fallback={<Loading width="1280px" height="392px" />}>
        <RecentContainer />
        <MovieReviewContainer />
      </Suspense>
    </Section>
  )
}

const Section = styled.div`
  ${flex({ justify: 'space-between' })}
`

export default CommunityContainer
