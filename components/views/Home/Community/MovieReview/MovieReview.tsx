import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors, flex, flexCenter, typography } from '@/styles/emotion'
import { RenderIf, SwitchCase, Tag } from '@/components/common'

const MovieReview = ({ id, category, title, comment }: Review) => {
  return (
    <Container>
      <SwitchCase
        value={category}
        caseBy={{
          이벤트: <Tag color="orange">{category}</Tag>,
        }}
        defaultRender={<Tag>{category}</Tag>}
      />
      <Link href={`/article/movie/${id}`} css={LinkBox}>
        <Title>{title}</Title>
        <RenderIf
          condition={comment.length > 0}
          render={<CommentCount>{comment.length}</CommentCount>}
        />
      </Link>
    </Container>
  )
}

const CommentCount = styled.div`
  ${flexCenter}
  ${typography.contentBody}
  color: ${colors.primary.orange};
  text-decoration: underline ${colors.primary.orange};
`

const Title = styled.div`
  ${typography.contentBody}
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
`

const LinkBox = css`
  ${flex({ align: 'center', justify: 'space-between' })}
  flex: 1;
  overflow: hidden;
  gap: 8px;
`

const Container = styled.li`
  width: 100%;
  display: flex;
  gap: 16px;
`

export default MovieReview
