import { useState } from 'react'
import styled from '@emotion/styled'
import { useFetchUserActivityComment } from '@/services/myPage'
import { colors, flex, flexCenter, flexGap, font } from '@/styles/emotion'
import { cutString, snakeToCamel } from '@/utils'
import { Pagination } from '@/components/common'
import { useRouter } from 'next/router'

const CommentContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: activityCommentList } = useFetchUserActivityComment({
    page: Math.max(currentPage - 1, 0),
    size: 10,
  })
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <Title>
          &#39;{activityCommentList.pageInfo.numberOfElements}&#39; 개의 작성한
          댓글이 있습니다.
        </Title>
        <Table>
          <tbody>
            {activityCommentList.comments.map(comment => {
              return (
                <Tr key={comment.id}>
                  <Td
                    color={colors.primary.black}
                    role="button"
                    css={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    onClick={() => {
                      router.push(
                        `/article/${snakeToCamel(
                          comment.article.category.toLowerCase()
                        )}/${comment.article.id}`
                      )
                    }}
                  >
                    {cutString(comment.content, 65)}
                    {'  '}
                    <CommentLikes>{comment.likes}</CommentLikes>
                  </Td>
                  <Td color="#888888">
                    {new Intl.DateTimeFormat('ko')
                      .format(comment.createdAt)
                      .slice(0, -1)}
                  </Td>
                </Tr>
              )
            })}
          </tbody>
        </Table>
      </Wrapper>
      <PaginationBox>
        <Pagination
          count={5}
          currentPage={currentPage}
          totalPage={activityCommentList.pageInfo.totalPages}
          onChange={page => setCurrentPage(page)}
        />
      </PaginationBox>
    </Container>
  )
}

const Table = styled.table`
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
`

const PaginationBox = styled.div`
  ${flexCenter}
`

const CommentLikes = styled.span`
  ${font({ size: '16px', weight: '500', lineHeight: '27px' })}
  color: ${colors.primary.orange};
  text-decoration: underline;
  text-decoration-color: ${colors.primary.orange};
`

const Td = styled.td<{ color: string }>`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  color: ${({ color }) => color};
  cursor: pointer;
`

const Tr = styled.tr`
  ${flex({ justify: 'space-between' })}
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #dddddd;

  &:first-of-type {
    border-top: 1px solid #dddddd;
  }
`

const Title = styled.h1`
  ${font({ size: '16px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
  padding: 20px;
`

const Container = styled.div`
  ${flexGap('40px')}
  width: 100%;
`

export default CommentContainer
