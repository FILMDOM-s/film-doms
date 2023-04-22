import styled from '@emotion/styled'
import { ImageIcon } from '@svgs/common'
import { colors, typography } from '@/styles/emotion'
import { RenderIf } from '@/components/common'

interface Props {
  num: number
  article: Article.Popular
}

const ArticlePopularItem = ({ num, article }: Props) => {
  return (
    <Article>
      <ArticleNum>{num}.</ArticleNum>
      <ArticleTitle>
        <RenderIf condition={article.containImage} render={<ImageIcon />} />
        <h3>{article.title}</h3>
      </ArticleTitle>
      <ArticleAuthor>{article.author.nickname}</ArticleAuthor>
    </Article>
  )
}

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

export default ArticlePopularItem
