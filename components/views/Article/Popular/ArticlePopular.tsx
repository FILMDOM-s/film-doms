import { useFetchPopularArticleList } from '@/services/article'
import { snakeToCamel } from '@/utils'
import Link from 'next/link'
import ArticlePopularItem from './ArticlePopularItem'

const ArticlePopular = () => {
  const { data: articleList } = useFetchPopularArticleList()

  return (
    <div>
      {articleList.map((article, idx) => (
        <Link
          href={`/article/${snakeToCamel(article.category)}/${article.id}`}
          key={article.id}
        >
          <ArticlePopularItem num={idx + 1} article={article} />
        </Link>
      ))}
    </div>
  )
}

export default ArticlePopular
