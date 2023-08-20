import { useState } from 'react'
import styled from '@emotion/styled'
import { ImageIcon } from '@svgs/common'
import { useFetchUserActivityArticle } from '@/services/myPage'
import { colors, flex, flexCenter, flexGap, font } from '@/styles/emotion'
import { cutString, snakeToCamel } from '@/utils'
import { Pagination, RenderIf } from '@/components/common'
import { useRouter } from 'next/router'

const ArticleContainer = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: activityArticleList } = useFetchUserActivityArticle({
    page: Math.max(currentPage - 1, 0),
    size: 10,
  })
  const router = useRouter()

  return (
    <Container>
      <Wrapper>
        <Box>
          <Title>
            &#39;{activityArticleList.pageInfo.numberOfElements}&#39; 개의
            작성한 글이 있습니다.
          </Title>
        </Box>
        <Table>
          <thead>
            <THeadTr>
              <Th width="10%">태그</Th>
              <Th width="40%">제목</Th>
              <Th width="20%">날짜</Th>
              <Th width="20%">조회수</Th>
              <Th width="10%">추천</Th>
            </THeadTr>
          </thead>
          <tbody>
            {activityArticleList.articles.map(article => {
              return (
                <TBodyTr key={article.id}>
                  <Td width="10%" color={colors.grey[600]}>
                    {article.tag}
                  </Td>
                  <Td
                    width="40%"
                    color={colors.primary.black}
                    justify="flex-start"
                  >
                    <Content
                      role="button"
                      onClick={() => {
                        router.push(
                          `/article/${snakeToCamel(
                            article.category.toLowerCase()
                          )}/${article.id}`
                        )
                      }}
                    >
                      <RenderIf
                        condition={article.containImage}
                        render={<ImageIcon width="15" height="15" />}
                      />
                      {article.containImage
                        ? cutString(article.title, 22)
                        : cutString(article.title, 24)}
                      <CommentCount>{article.commentCount}</CommentCount>
                    </Content>
                  </Td>
                  <Td width="20%" color="#888888">
                    {new Intl.DateTimeFormat('ko')
                      .format(article.createdAt)
                      .slice(0, -1)}
                  </Td>
                  <Td width="20%" color={colors.grey[100]}>
                    {article.views}
                  </Td>
                  <Td width="10%" color={colors.grey[100]}>
                    {article.likes}
                  </Td>
                </TBodyTr>
              )
            })}
          </tbody>
        </Table>
      </Wrapper>
      <PaginationBox>
        <Pagination
          count={5}
          currentPage={currentPage}
          totalPage={activityArticleList.pageInfo.totalPages}
          onChange={page => setCurrentPage(page)}
        />
      </PaginationBox>
    </Container>
  )
}

const Content = styled.div`
  ${flex({ justify: 'flex-start', align: 'center' })}
  gap: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const PaginationBox = styled.div`
  ${flexCenter}
`

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
`

const CommentCount = styled.span`
  ${font({ size: '16px', weight: '500', lineHeight: '27px' })}
  color: ${colors.primary.orange};
  text-decoration: underline;
  text-decoration-color: ${colors.primary.orange};
`

const Td = styled.td<{
  color: string
  width: string
  justify?: 'center' | 'flex-start'
  clickable?: boolean
}>`
  ${font({ size: '16px', weight: '500', lineHeight: '24px' })}
  ${({ justify = 'center' }) => flex({ justify, align: 'center' })}
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`

const TBodyTr = styled.tr`
  display: flex;
  border-bottom: 1px solid #dddddd;
  padding: 20px 0;
`

const THeadTr = styled.tr`
  display: flex;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding: 12px 0;
`

const Th = styled.th<{ width: string }>`
  ${flexCenter}
  ${font({ size: '16px', weight: '700', lineHeight: '24px' })}
  width: ${({ width }) => width};
  color: ${colors.grey[900]};
`

const Box = styled.div`
  width: 100%;
  padding: 20px;
`

const Title = styled.h1`
  ${font({ size: '16px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('40px')}
  width: 100%;
`

export default ArticleContainer
