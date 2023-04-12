import { ArticleLayout } from '@/components/views/Layout'
import styled from '@emotion/styled'
import { ArticleDetailViews, ArticleMainViews } from '@views/Article'
import { useRouter } from 'next/router'
import { hasOwnProperty } from '@/utils'
import { CATEGORIES } from '@/constants/article'
import { OpenGraph } from '@/components/common'
import { useFetchArticleById } from '@/services/article'
import { flexGap } from '@/styles/emotion'

const ArticleDetailPage = () => {
  const { query } = useRouter()
  const category = query.category as string
  const id = Number(query.id)
  const isValidCategory = hasOwnProperty(CATEGORIES, category)

  if (!isValidCategory) {
    // TODO: 유효하지 않은 카테고리 처리 필요
    return null
  }

  return (
    <OpenGraph title={'Article'} path={`/article/${category}/${id}`}>
      <ArticleLayout right={<Box>인기게시글</Box>}>
        <ColumnGrid>
          <ArticleDetailViews articleId={id} category={category} />
          <ArticleMainViews category={category} />
        </ColumnGrid>
      </ArticleLayout>
    </OpenGraph>
  )
}

export default ArticleDetailPage

// ! 임시로 만든 인기게시글 컴포넌트입니다.
// ! right 자리에 만든 인기게시글 컴포넌트와 sticky 등을 포함한 wrapper box를 합성하여 넣으면 됩니다.
const Box = styled.div`
  width: 302px;
  height: 400px;
  border: 1px solid #000;
  position: sticky;
  top: 30%;
  right: 0;
`
const ColumnGrid = styled.div`
  ${flexGap('40px')}
`
