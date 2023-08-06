import { Suspense, useState } from 'react'
import styled from '@emotion/styled'
import { colors, flexGap, typography } from '@/styles/emotion'
import { CATEGORIES } from '@/constants/article'
import { useRouter } from 'next/router'
import { BoardContainer } from './BoardContainer'

const RecentContainer = () => {
  const router = useRouter()
  const category = String(router.query.category)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container category={category}>
      <Title>{CATEGORIES[category].title}</Title>
      <Suspense fallback={<BoardLoading />}>
        <BoardContainer
          category={category}
          params={{
            page: currentPage,
            size: 22,
          }}
          onChangePage={page => setCurrentPage(page)}
        />
      </Suspense>
    </Container>
  )
}

const Title = styled.h1`
  ${typography.h5}
  color: ${colors.primary.black};
`

const Container = styled.div<{ category: string }>`
  ${flexGap('40px')}
  width: 954px;
`

const BoardLoading = styled.div`
  width: 100%;
  height: 1606px;
`

export default RecentContainer
