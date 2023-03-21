import { flexCenter, mediaQuery } from '@/styles/emotion'
import { css } from '@emotion/react'
import Image from 'next/image'

const Notice = ({
  title,
  image,
  startAt,
  endAt,
}: {
  title: string
  image: string
  startAt: string
  endAt: string
}) => {
  return (
    <div css={NoticeElement} className="notice">
      <Image width={303} height={392} src={image} alt="title" />
      <div css={NoticeElementTitle}>{title}</div>
      <div css={NoticeElementDate}>{`${startAt} ~ ${endAt}`}</div>
    </div>
  )
}

export default Notice

const NoticeElement = css`
  ${flexCenter}
  flex-direction: column;
  min-width: 161px;
  min-height: 210px;

  ${mediaQuery.tablet`
    min-width: 161px
    min-height: 210px;
  `}

  ${mediaQuery.laptop`
    min-width: 211px;
    min-height: 275px;
  `}

  ${mediaQuery.pc`
    max-width: 303px;
    min-height: 392px;
  `}
`

const NoticeElementTitle = css`
  width: 100%;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 14px;

  ${mediaQuery.laptop`
  font-size: 20px;
  line-height: 33px;
  `}

  ${mediaQuery.pc`
    font-size: 24px;
  line-height: 36px;
  padding-top: 16px;
`}
`
const NoticeElementDate = css`
  width: 100%;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #666666;
  padding-top: 10px;

  ${mediaQuery.laptop`
  font-size: 16px;
  line-height: 20px;
  `}

  ${mediaQuery.pc`
  font-size: 20px;
  line-height: 30px;
  padding-top: 14px;
  `}
`
