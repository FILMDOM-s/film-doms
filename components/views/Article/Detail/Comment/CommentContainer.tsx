import {
  useCreateComment,
  useFetchArticleCommentListByCategoryById,
} from '@/services/article'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { ArticleDetailProps } from '../ArticleDetail'
import CommentItem from './CommentItem'
import { useState } from 'react'
import { Button } from '@/components/common'
import { IconLoader } from '@tabler/icons-react'
import { useFetchUserInfo } from '@/services/myPage'

const CommentContainer = ({ articleId, category }: ArticleDetailProps) => {
  const { data: commentList, refetch } =
    useFetchArticleCommentListByCategoryById(category, articleId)
  const [comment, setComment] = useState('')
  const { mutate: createComment, isLoading } = useCreateComment()
  const { data: userInfo } = useFetchUserInfo()

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!comment) return
    await createComment(
      {
        articleId,
        parentCommentId: null,
        content: comment,
      },
      {
        onSuccess: () => {
          setComment('')
          refetch()
        },
      }
    )
  }

  return (
    <Container>
      <CommentCount>{`댓글 ${commentList.commentCount}개`}</CommentCount>
      {commentList.comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            borderBottom={commentList.commentCount - 1 !== index}
            comment={comment}
            articleId={articleId}
            refetch={refetch}
            isMine={userInfo?.id === comment.author.id}
          />
        )
      })}
      {userInfo?.id && (
        <Form onSubmit={handleCommentSubmit}>
          <CommentHead>댓글 작성</CommentHead>
          <TextArea onChange={handleCommentChange} value={comment} />
          <SubmitCommentButton leftIcon={isLoading && <IconLoader />}>
            등록
          </SubmitCommentButton>
        </Form>
      )}
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

const Form = styled.form`
  ${flexGap('20px', 'column')}
  align-items: flex-end;
  margin-top: 20px;
  padding: 20px 0;
`

const TextArea = styled.textarea`
  resize: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
  width: 914px;
  height: 100px;
  border: 1px solid #444444;
`

const CommentHead = styled.div`
  ${typography.contentBodyBold};
  color: ${colors.primary.black};
  width: 914px;
`

const SubmitCommentButton = styled(Button)`
  color: #ffffff;
  border: none;
  background-color: #888888;
  ${typography.tag};
  padding: 12px 36px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.primary.black};
  }
`
