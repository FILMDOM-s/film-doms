import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArticleLayout } from '@views/Layout'
import { ArticleMainViews } from '@views/Article'
import { hasOwnProperty } from '@/utils'
import { OpenGraph } from '@/components/common'
import { CATEGORIES } from '@/constants/article'

const ArticlePage = () => {
  const { query } = useRouter()
  const category = query.category as string
  const isValidCategory = hasOwnProperty(CATEGORIES, category)

  if (!isValidCategory) {
    // TODO: 유효하지 않은 카테고리 처리 필요
    return null
  }

  return (
    <OpenGraph title={CATEGORIES[category].title} path={`/article/${category}`}>
      <ArticleLayout right={<Box>인기게시글</Box>}>
        <ArticleMainViews category={category} />
      </ArticleLayout>
    </OpenGraph>
  )
}

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

export default ArticlePage
