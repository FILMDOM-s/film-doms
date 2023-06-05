import { Button } from '@/components/common'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { useState } from 'react'

const CommentForm = ({}) => {
  const [comment, setComment] = useState('')

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setComment('')
  }

  return (
    <Form onSubmit={handleCommentSubmit}>
      <CommentHead>댓글 작성</CommentHead>
      <TextArea onChange={handleCommentChange} />
      <SubmitCommentButton>등록</SubmitCommentButton>
    </Form>
  )
}

export default CommentForm

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

const GrayButton = styled(Button)`
  color: #ffffff;
  border: none;
  background-color: #888888;
  ${typography.tag}
  padding: 6px 18px;
`
