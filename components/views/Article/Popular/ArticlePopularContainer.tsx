import { Error, ResetErrorBoundary } from '@/components/common'
import { colors, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { Suspense } from 'react'
import ArticlePopular from './ArticlePopular'
import FallbackLoading from '@/components/common/Loading/FallbackLoading'

const ArticlePopularContainer = () => {
  return (
    <Container>
      <Title>인기 게시글</Title>
      <ResetErrorBoundary fallback={<Error />}>
        <Suspense fallback={<FallbackLoading />}>
          <ArticlePopular />
        </Suspense>
      </ResetErrorBoundary>
    </Container>
  )
}

export default ArticlePopularContainer

const Container = styled.div`
  position: sticky;
  top: 294px;
  width: 302px;
  height: 360px;
`
const Title = styled.div`
  height: 60px;
  background-color: ${colors.sub.red};
  color: #ffffff;
  ${typography.contentBodyBold}
  line-height: 24px;
  display: flex;
  align-items: center;
  padding-left: 30px;
`
