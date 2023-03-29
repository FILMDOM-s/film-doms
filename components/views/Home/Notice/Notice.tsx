import { flexCenter, mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import Image from 'next/image'
import * as Tag from '@components/common/Tag/Shape'
import * as Button from '@components/common/Button'
import styled from '@emotion/styled'

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
    <NoticeElement>
      <Image width={360} height={400} src={image} alt="title" />
      <NoticeElementOwnerWrapper>
        <NoticeElementOwner>{owner}</NoticeElementOwner>
        <Tag.Round>{classification}</Tag.Round>
      </NoticeElementOwnerWrapper>
      <NoticeElementTitle>{title}</NoticeElementTitle>
      <NoticeElementDateWrapper>
        <NoticeElementDate>{`${startAt} ~ ${endAt}`}</NoticeElementDate>
        <Button.TicketButton>{'자세히 보기'}</Button.TicketButton>
      </NoticeElementDateWrapper>
    </NoticeElement>
  )
}

export default Notice

const NoticeElement = styled.div`
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const NoticeElementOwnerWrapper = styled.div`
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;
  padding-top: 20px;
  gap: 16px;
`

const NoticeElementDateWrapper = styled.div`
  ${flexCenter}
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`

const NoticeElementOwner = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #ff5414;
`

const NoticeElementTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #111111;
  padding-top: 17px;
`
const NoticeElementDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #666666;
  padding-top: 10px;
`
