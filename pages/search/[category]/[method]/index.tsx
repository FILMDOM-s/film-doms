import { ArticleLayout } from '@views/Layout'
import { hasOwnProperty } from '@/utils'
import { OpenGraph } from '@/components/common'
import { CATEGORIES } from '@/constants/article'
import ArticlePopularContainer from '@/components/views/Article/Popular/ArticlePopularContainer'
import dynamic from 'next/dynamic'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

type CategoryProps = {
  category: string
  method: string
}

const ArticlePage = ({ category, method }: CategoryProps) => {
  const { push } = useRouter()
  const components: {
    [key: string]: any
  } = {
    movie: dynamic(() => import('@views/Article/Main/SearchArticleContainer')),
    filmUniverse: dynamic(
      () => import('@views/Article/Main/SearchArticleContainer')
    ),
  }
  const Component = components[category]

  const isValidCategory = hasOwnProperty(CATEGORIES, category)

  if (!isValidCategory) {
    push('/404')
  }

  return (
    <OpenGraph
      title={CATEGORIES[category].title}
      path={`/search/${category}/${method}`}
    >
      <ArticleLayout width={'1280px'} right={<ArticlePopularContainer />}>
        <Component />
      </ArticleLayout>
    </OpenGraph>
  )
}

export default ArticlePage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'movie', method: 'title_content' } },
      { params: { category: 'movie', method: 'nickname' } },
      { params: { category: 'filmUniverse', method: 'title_content' } },
      { params: { category: 'filmUniverse', method: 'nickname' } },
      { params: { category: 'critic', method: 'title_content' } },
      { params: { category: 'critic', method: 'nickname' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      category: params && params.category,
      method: params && params.method,
    },
  }
}
