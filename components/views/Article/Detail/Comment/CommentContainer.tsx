import { useFetchCommentsByArticle } from '@/services/comment'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { ArticleDetailProps } from '../ArticleDetail'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const CommentContainer = ({ articleId, category }: ArticleDetailProps) => {
  const { data: comments } = useFetchCommentsByArticle(articleId, category)
  console.log(comments)
  return (
    <Container>
      <CommentCount>{`댓글 ${comments.length}개`}</CommentCount>
      {comments.map(comment => {
        return <CommentItem comment={comment}/>
      })}
      <CommentForm/>
    </Container>
  )
}

export default CommentContainer

const Container = styled.div`
  ${flexGap('20px')}
  width: 914px;
`

const CommentCount = styled.div`
  ${typography.contentBodyBold}
  color:${colors.primary.black}
  font-weight:600;
`
