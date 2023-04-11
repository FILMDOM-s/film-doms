import { defaultProfile } from '@/assets/images/common'
import { ChevronFillDown, ChevronFillUp } from '@/assets/svgs/common'
import MiniThumb from '@/assets/svgs/common/MiniThumb'
import { Button } from '@/components/common'
import { colors, flexGap, typography } from '@/styles/emotion'
import { dateDiff } from '@/utils/dateDiff'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import ChildCommentItem from './ChildCommentItem'

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [leaveReply, setLeaveReply] = useState<boolean>(false)
  const [replyToggle, setReplyToggle] = useState<boolean>(false)

  return (
    <CommentItemContainer>
      <CommentProfileBox>
        <Image
          src={comment.author.profile ?? defaultProfile}
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
        <ContentBox>{comment.content}</ContentBox>
        <ButtonBox>
          <CommentButton leftIcon={<MiniThumb />}>
            {comment.likes}
          </CommentButton>
          <CommentButton onClick={() => setLeaveReply(!leaveReply)}>
            답글
          </CommentButton>
        </ButtonBox>
        {comment.childComments.length > 0 && (
          <>
            <ReplyToggleButton
              leftIcon={replyToggle ? <ChevronFillDown /> : <ChevronFillUp />}
              onClick={() => setReplyToggle(!replyToggle)}
            >
              답글 {comment.childComments.length}개
            </ReplyToggleButton>
            <ReplyBox open={replyToggle}>
              {comment.childComments.length > 0 &&
                comment.childComments.map(childComment => {
                  return (
                    <ChildCommentItem
                      key={childComment.id}
                      comment={childComment}
                    />
                  )
                })}
            </ReplyBox>
          </>
        )}
      </CommentInfoBox>
    </CommentItemContainer>
  )
}

export default CommentItem

const CommentItemContainer = styled.div`
  ${flexGap('10px', 'row')}
  width: 100%;
  padding: 0 0 24px 0;
  border-bottom: 1px solid #e9ecef;
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

const ContentBox = styled.div`
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

const ReplyBox = styled.div<{ open: boolean }>`
  ${flexGap('10px', 'column')}
  item-align: flex-start;
  height: ${({ open }) => (open ? 'auto' : '0')};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: height 0.3s ease-in-out;
`

const ReplyToggleButton = styled(Button)`
  background-color: white;
  ${typography.tag}
  padding: 5px 18px;
  border: none;
  font-weight: 500;
  cursor: pointer;
`
