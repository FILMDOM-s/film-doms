import { ImageIcon } from '@/assets/svgs/common'
import { RenderIf } from '@/components/common'
import { useFetchArticlePopular } from '@/services/popular'
import { colors, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'

const ArticlePopular = () => {
  const { data: articles } = useFetchArticlePopular()
  return (
    <div>
      {articles.map((article, idx) => (
        <Link
          href={`/article/${article.category}/${article.id}`}
          key={article.id}
        >
          <Article>
            <ArticleNum>{idx + 1}.</ArticleNum>
            <ArticleTitle>
              <RenderIf
                condition={article.isContainImage}
                render={<ImageIcon />}
              />
              <h3>{article.title}</h3>
            </ArticleTitle>
            <ArticleAuthor>{article.writer.nickname}</ArticleAuthor>
          </Article>
        </Link>
      ))}
    </div>
  )
}

export default ArticlePopular

const Article = styled.div`
  height: 60px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey[100]};
  line-height: 20px;
  ${colors.primary.black}
`
const ArticleNum = styled.div`
  ${typography.contentBodyBold}
`

const ArticleAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 37px;
`
const ArticleTitle = styled(ArticleAuthor)`
  display: flex;
  column-gap: 6.5px;
  justify-content: flex-start;
  width: 180px;
  h3 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
