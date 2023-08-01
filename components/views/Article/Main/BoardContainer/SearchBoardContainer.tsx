import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import {
  useFetchArticleNoticeList,
  useFetchSearchArticleList,
} from '@/services/article'
import { flex, flexCenter, flexGap, font } from '@/styles/emotion'
import { ArticleBoard } from './ArticleBoard'
import { camelToSnake } from '@/utils'
import { Pagination } from '@/components/common'

interface Props {
  category: string
  method: string
  searchString: string
  params: Required<Omit<Article.MainContentParams, 'tag'>> &
    Pick<Article.MainContentParams, 'tag'>
  onChangePage: (page: number) => void
}

const SearchBoardContainer = ({
  category,
  method,
  searchString,
  params: { page, size },
  onChangePage,
}: Props) => {
  const { push } = useRouter()

  const { data: noticeList } = useFetchArticleNoticeList()
  const { data: articleList } = useFetchSearchArticleList(
    camelToSnake(category),
    method,
    `keyword=${searchString}&page=${Math.max(page - 1, 0)}&size=${size}`
  )

  return (
    <Container>
      <ArticleBoard
        noticeItems={noticeList}
        articleItems={articleList?.content}
      />
      <ButtonBox>
        <Button onClick={() => push(`/write/article/${category}`)}>
          게시글 작성하기
        </Button>
      </ButtonBox>
      <Box>
        <Pagination
          count={5}
          currentPage={page}
          totalPage={articleList?.totalPages}
          onChange={onChangePage}
        />
      </Box>
    </Container>
  )
}

const Box = styled.div`
  ${flexCenter}
`

const Button = styled.button`
  ${flexCenter}
  width: 193px;
  height: 40px;
  color: #ffffff;
  ${font({ weight: '700', lineHeight: '16px' })}
  background-color: #888888;
`

const ButtonBox = styled.div`
  ${flex({ align: 'center', justify: 'flex-end' })}
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

export default SearchBoardContainer
