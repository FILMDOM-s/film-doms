import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import {
  useFetchArticleByCategory,
  useFetchArticleNotice,
} from '@/services/article'
import { flex, flexCenter, flexGap, font } from '@/styles/emotion'
import ArticleBoard from './ArticleBoard'
import Pagination from './Pagination'

interface Props {
  category: Article.Category
  params: Article.Params
  onChangePage: (page: number) => void
}

const BoardContainer = ({ category, params, onChangePage }: Props) => {
  const { push } = useRouter()

  const { data: notices } = useFetchArticleNotice()
  const { data: articles } = useFetchArticleByCategory(category, params)

  return (
    <Container>
      <ArticleBoard noticeItems={notices} articleItems={articles.items} />
      <ButtonBox>
        <Button onClick={() => push(`/write/article/${category}`)}>
          게시글 작성하기
        </Button>
      </ButtonBox>
      <Box>
        <Pagination
          count={5}
          currentPage={params.page}
          totalPage={articles.totalPage}
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

export default BoardContainer
