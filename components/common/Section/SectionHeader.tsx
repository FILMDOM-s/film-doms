import { type ReactNode } from 'react'
import styled from '@emotion/styled'
import { colors, flex, typography } from '@/styles/emotion'

interface Props {
  title: string
  right?: ReactNode
}

const SectionHeader = ({ title, right = null }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {right}
    </Container>
  )
}

const Title = styled.h1`
  ${typography.h5}
  line-height: 36px;
  color: ${colors.primary.black};
`

const Container = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })}
  padding: 20px 0;
  border-bottom: 2px solid ${colors.primary.black};
`

export default SectionHeader
