import { flexCenter } from '@/styles/emotion'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Tag, TicketButton } from '@/components/common'

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
        <Tag shape="round">{classification}</Tag>
      </NoticeElementOwnerWrapper>
      <NoticeElementTitle>
        {title.length <= 50 ? title : title.substring(0, 50) + '...'}
      </NoticeElementTitle>
      <NoticeElementDateWrapper>
        <NoticeElementDate>{`${startAt} ~ ${endAt.substring(
          5
        )}`}</NoticeElementDate>
        <TicketButton>{'자세히 보기'}</TicketButton>
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
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
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
  height: 64px;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #111111;
  margin-top: 17px;
  margin-bottom: 28px;
`
const NoticeElementDate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #aaaaaa;
`
