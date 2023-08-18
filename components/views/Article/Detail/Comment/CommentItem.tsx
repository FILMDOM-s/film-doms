import { defaultProfile } from '@images/common'
import { ChevronFillDown, ChevronFillUp } from '@svgs/common'
import MiniThumb from '@svgs/common/MiniThumb'
import { Button, Loading } from '@/components/common'
import { colors, flexGap, typography } from '@/styles/emotion'
import { dateDiff } from '@/utils/dateDiff'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import ChildCommentItem from './ChildCommentItem'
import { getImageSrcByUuid } from '@/utils'
import {
  useCreateComment,
  useDeleteComment,
  useToggleCommentLike,
  useUpdateComment,
} from '@/services/article'
import { IconLoader } from '@tabler/icons-react'

const CommentItem = ({
  articleId,
  comment,
  borderBottom,
  refetch,
  isMine,
}: {
  articleId: number
  comment: Article.Comment
  borderBottom: boolean
  refetch: () => void
  isMine: boolean
}) => {
  const [leaveReply, setLeaveReply] = useState<boolean>(false)
  const [replyToggle, setReplyToggle] = useState<boolean>(false)
  const [content, setContent] = useState<string>(comment.content)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)

  const [reply, setReply] = useState('')
  const { mutate: createComment, isLoading } = useCreateComment()
  const { mutate: updateComment, isLoading: isUpdateLoading } =
    useUpdateComment()
  const { mutate: deleteComment, isLoading: isDeleteLoading } =
    useDeleteComment()
  const { mutate: toggleCommentLike, isLoading: isToggleLoading } =
    useToggleCommentLike()

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(e.target.value)
  }

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!reply) return
    await createComment(
      {
        articleId,
        parentCommentId: comment.id,
        content: reply,
      },
      {
        onSuccess: () => {
          setReply('')
          refetch()
        },
      }
    )
  }

  const handleToggleLike = () => {
    toggleCommentLike(comment.id, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  return (
    <CommentItemContainer borderBottom={borderBottom}>
      <CommentProfileBox>
        <Image
          src={
            getImageSrcByUuid(comment.author.profileImage.uuidFileName) ??
            defaultProfile
          }
          alt="user-profile"
          width={40}
          height={40}
          style={{
            borderRadius: '50%',
            marginTop: '6px',
          }}
          priority
        />
      </CommentProfileBox>
      <CommentInfoBox>
        <NicknameBox>
          {comment.author.nickname}
          <span>{dateDiff(comment.createdAt)}</span>
        </NicknameBox>
        <ContentBox
          value={content}
          onChange={e => {
            setContent(e.target.value)
          }}
          disabled={!isUpdate}
        />
        <ButtonBox>
          <CommentButton
            leftIcon={isToggleLoading ? <IconLoader /> : <MiniThumb />}
            onClick={handleToggleLike}
          >
            {comment.likes}
          </CommentButton>
          <CommentButton
            onClick={() => {
              setLeaveReply(!leaveReply)
            }}
          >
            답글
          </CommentButton>
          {isMine && (
            <CommentButton
              onClick={() => {
                if (isUpdate) {
                  // 수정완료
                  updateComment(
                    {
                      commentId: comment.id,
                      content,
                    },
                    {
                      onSuccess: () => {
                        refetch()
                      },
                    }
                  )
                }

                setIsUpdate(!isUpdate)
              }}
            >
              {isUpdate ? '수정완료' : '수정'}
            </CommentButton>
          )}
          {isMine && (
            <CommentButton
              onClick={() => {
                // 수정완료
                deleteComment(
                  {
                    commentId: comment.id,
                  },
                  {
                    onSuccess: () => {
                      refetch()
                    },
                  }
                )
              }}
            >
              삭제
            </CommentButton>
          )}
        </ButtonBox>
        {comment.childComments?.length > 0 && (
          <>
            <RelyToggleButton
              leftIcon={replyToggle ? <ChevronFillDown /> : <ChevronFillUp />}
              onClick={() => setReplyToggle(!replyToggle)}
            >
              답글 {comment.childComments.length}개
            </RelyToggleButton>
            <ReplyBox open={replyToggle}>
              {comment.childComments.length > 0 &&
                comment.childComments.map((childComment, index) => {
                  return (
                    <ChildCommentItem
                      key={index}
                      borderBottom={comment.childComments.length - 1 !== index}
                      comment={childComment}
                    />
                  )
                })}
            </ReplyBox>
          </>
        )}
        {leaveReply && (
          <Form onSubmit={handleCommentSubmit}>
            <CommentHead>답글 작성</CommentHead>
            <TextArea onChange={handleCommentChange} value={reply} />
            <SubmitCommentButton leftIcon={isLoading && <IconLoader />}>
              등록
            </SubmitCommentButton>
          </Form>
        )}
      </CommentInfoBox>
    </CommentItemContainer>
  )
}

export default CommentItem

const CommentItemContainer = styled.div<{ borderBottom: boolean }>`
  ${flexGap('10px', 'row')}
  width: 100%;
  padding: 0 0 24px 0;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `1px solid #e9ecef` : 'none'};
  item-align: flex-start;
`

const CommentProfileBox = styled.div`
  ${flexGap('10px', 'column')}
`

const CommentInfoBox = styled.div`
  ${flexGap('10px', 'column')}
  width: 100%;
`

const NicknameBox = styled.div`
  ${flexGap('6px', 'row')}
  align-items: center;
  ${typography.contentBody}
  color: ${colors.primary.black};
  font-weight: 600;
  span {
    ${typography.tag}
    color: ${colors.grey[100]};
    font-weight: 600;
  }
`

const ContentBox = styled.input`
  ${typography.contentBody}
  color: ${colors.primary.black};
  &:disabled {
    border: none;
    background-color: transparent;
  }
`

const ButtonBox = styled.div`
  ${flexGap('10px', 'row')}
  align-items: center;
`

const CommentButton = styled(Button)`
  background-color: white;
  ${typography.tag}
  padding: 5px 18px;
  border: 1px solid ${colors.primary.black};
  font-weight: 500;
`

const ReplyBox = styled.div<{ open: boolean }>`
  ${flexGap('10px', 'column')}
  item-align: flex-start;
  height: ${({ open }) => (open ? 'auto' : '0')};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: height 0.3s ease-in-out;
`

const RelyToggleButton = styled(Button)`
  background-color: white;
  ${typography.tag}
  padding: 5px 18px;
  border: none;
  font-weight: 500;
  cursor: pointer;
`

const Form = styled.form`
  ${flexGap('20px', 'column')}
  align-items: flex-end;
  margin-top: 20px;
  padding: 20px 0;
  width: 100%;
`

const TextArea = styled.textarea`
  resize: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
  width: 100%;
  height: 100px;
  border: 1px solid #444444;
`

const CommentHead = styled.div`
  ${typography.contentBodyBold};
  color: ${colors.primary.black};
  width: 100%;
`

const SubmitCommentButton = styled(Button)`
  color: #ffffff;
  border: none;
  background-color: #888888;
  ${typography.tag};
  padding: 6px 18px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.primary.black};
  }
`
