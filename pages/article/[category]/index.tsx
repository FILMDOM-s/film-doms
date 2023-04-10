import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArticleLayout } from '@views/Layout'
import { ArticleMainViews } from '@views/Article'
import { hasOwnProperty } from '@/utils'
import { OpenGraph } from '@/components/common'
import { CATEGORIES } from '@/constants/article'
import ArticlePopularContainer from '@/components/views/Article/Popular/ArticlePopularContainer'

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
      <ArticleLayout right={<ArticlePopularContainer />}>
        <ArticleMainViews category={category} />
      </ArticleLayout>
    </OpenGraph>
  )
}

export default ArticlePage
