import { flexCenter, mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'

const MovieReview = ({ id, title, category, comment }: Review) => {
  return (
    <Container>
      <Badge>
        <BadgeText>{category}</BadgeText>
      </Badge>
      <Link href={`/community/movie/${id}`} css={LinkBox}>
        <Title>{title}</Title>
        <CommentCount>[{comment.length}]</CommentCount>
      </Link>
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
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 6px;

  ${mediaQuery.tablet`
    font-size: 16px;
    line-height: 24px;
  `}

  ${mediaQuery.pc`
    font-size: 18px;
    line-height: 27px;
  `}
`

const LinkBox = css`
  display: flex;
  overflow: hidden;
  padding-right: 1rem;
`

const BadgeText = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 6rem;

  ${mediaQuery.tablet`
    font-size: 14px;
    line-height: 21px;
  `}

  ${mediaQuery.pc`
    font-size: 16px;
  `}
`

const Badge = styled.div`
  width: max-content;
  height: 20px;
  border-radius: 4px;
  padding: 1px 12px;
  background-color: #f5f5f5;
  flex-shrink: 0;

  ${mediaQuery.tablet`
    height: 23px;
  `}

  ${mediaQuery.pc`
    height: 24px;
  `}
`

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

export default MovieReview
