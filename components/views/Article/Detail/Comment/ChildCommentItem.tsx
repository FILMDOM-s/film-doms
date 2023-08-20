import { defaultProfile } from '@/assets/images/common'
import MiniThumb from '@/assets/svgs/common/MiniThumb'
import { Button } from '@/components/common'
import {
  useDeleteComment,
  useToggleCommentLike,
  useUpdateComment,
} from '@/services/article'
import { colors, flexGap, typography } from '@/styles/emotion'
import { getImageSrcByUuid } from '@/utils'
import { dateDiff } from '@/utils/dateDiff'
import styled from '@emotion/styled'
import { IconLoader } from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'

const ChildCommentItem = ({
  comment,
  borderBottom,
  isMine,
  refetch,
}: {
  comment: Article.ChildComment
  borderBottom: boolean
  isMine: boolean
  refetch: () => void
}) => {
  const [content, setContent] = useState<string>(comment.content)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const { mutate: updateComment, isLoading: isUpdateLoading } =
    useUpdateComment()
  const { mutate: deleteComment, isLoading: isDeleteLoading } =
    useDeleteComment()
  const { mutate: toggleCommentLike, isLoading: isToggleLoading } =
    useToggleCommentLike()

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
      </CommentInfoBox>
    </CommentItemContainer>
  )
}

export default ChildCommentItem

const CommentItemContainer = styled.div<{ borderBottom: boolean }>`
  ${flexGap('10px', 'row')}
  width: 100%;
  padding: 24px 0;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `1px solid #e9ecef` : 'none'};
  item-align: flex-start;
`

const CommentProfileBox = styled.div`
  ${flexGap('10px', 'column')}
`

const CommentInfoBox = styled.div`
  ${flexGap('10px', 'column')}
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

const ReplyBox = styled.div`
  ${flexGap('10px', 'row')}
  width: 100%;
  item-align: flex-start;
`
