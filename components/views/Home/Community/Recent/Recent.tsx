import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { colors, flex, flexCenter, typography } from '@/styles/emotion'
import { RenderIf, SwitchCase, Tag } from '@/components/common'
import { snakeToCamel } from '@/utils'

const Recent = ({ id, tag, title, commentCount, category }: Main.Recent) => {
  const categoryUrl = snakeToCamel(category.toLowerCase())

  return (
    <Container>
      <SwitchCase
        value={tag}
        caseBy={{
          이벤트: <Tag color="orange">{tag}</Tag>,
        }}
        defaultRender={<Tag>{tag}</Tag>}
      />
      <Link href={`/article/${categoryUrl}/${id}`} css={LinkBox}>
        <Title>{title}</Title>
        <RenderIf
          condition={commentCount > 0}
          render={<CommentCount>{commentCount}</CommentCount>}
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

export default Recent
