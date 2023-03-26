import { flexCenter, mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import Image from 'next/image'
import * as Tag from '@components/common/Tag/Shape'
import * as Button from '@components/common/Button'

const Notice = ({
  title,
  owner,
  type,
  classification,
  image,
  startAt,
  endAt,
}: {
  title: string
  owner: string
  type: string
  classification: string
  image: string
  startAt: string
  endAt: string
}) => {
  return (
    <div css={NoticeElement} className="notice">
      <Image width={360} height={400} src={image} alt="title" />
      <div css={NoticeElementOwnerWrapper}>
        <div css={NoticeElementOwner}>{owner}</div>
        <div>
          <Tag.Round>{classification}</Tag.Round>
        </div>
      </div>
      <div css={NoticeElementTitle}>{title}</div>
      <div css={NoticeElementDateWrapper}>
        <div css={NoticeElementDate}>{`${startAt} ~ ${endAt}`}</div>
        <Button.TicketButton>{'자세히 보기'}</Button.TicketButton>
      </div>
    </div>
  )
}

export default Notice

const NoticeElement = css`
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const NoticeElementOwnerWrapper = css`
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;
  padding-top: 20px;
  gap: 16px;
`

const NoticeElementDateWrapper = css`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`

const NoticeElementOwner = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #ff5414;
`

const NoticeElementTitle = css`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #111111;
  padding-top: 17px;
`
const NoticeElementDate = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #666666;
  padding-top: 10px;
`
