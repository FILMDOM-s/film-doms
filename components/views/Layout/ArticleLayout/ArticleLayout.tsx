import { type ReactNode, type PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'

interface Props extends PropsWithChildren {
  right?: ReactNode
}

const ArticleLayout = ({ children, right = null }: Props) => {
  return (
    <Container>
      {children}
      {right}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  position: relative;
  ${flex({ justify: 'space-between' })}
  padding-top: 40px;
  padding-bottom: 150px;
`

export default ArticleLayout
