import { Badge } from '@/components/common'
import { flexCenter, mediaQuery } from '@/styles/emotion'
import cutString from '@/utils'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

const Recent = ({ id, category, title, comment }: Recent) => {
  const { push } = useRouter()
  const cutTitle = cutString(title, 15)
  const cutCategory = cutString(category, 6)

  return (
    <Container onClick={() => push(`/community/recent/${id}`)}>
      <Badge css={BadgeBox}>
        <BadgeText>{cutCategory}</BadgeText>
      </Badge>
      <Title>{cutTitle}</Title>
      <CommentCount>[{comment.length}]</CommentCount>
    </Container>
  )
}

const CommentCount = styled.div`
  color: #f0380f;
  font-size: 12px;
  line-height: 18px;
  ${flexCenter}

  ${mediaQuery.tablet`
    line-height: 21px;
  `}

  ${mediaQuery.laptop`
    font-size: 14px;
  `}

  ${mediaQuery.pc`
    font-size: 16px;
  `}
`

const Title = styled.div`
  ${flexCenter}
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  ${mediaQuery.tablet`
    font-size: 16px;
    line-height: 24px;
  `}

  ${mediaQuery.pc`
    font-size: 18px;
    line-height: 27px;
  `}
`

const BadgeText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #666666;

  ${mediaQuery.tablet`
    font-size: 14px;
    line-height: 21px;
  `}

  ${mediaQuery.pc`
    font-size: 16px;
  `}
`

const BadgeBox = css`
  width: 45px;
  height: 20px;
  border-radius: 4px;
  padding: 1px 12px;

  ${mediaQuery.tablet`
    width: 49px;
    height: 23px;
  `}

  ${mediaQuery.pc`
    width: 54px;
    height: 24px;
  `}
`

const Container = styled.div`
  width: 336px;
  display: flex;
  gap: 0.5rem;
`

export default Recent
