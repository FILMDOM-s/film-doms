import { font } from '@/styles/emotion'
import styled from '@emotion/styled'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

const Title = styled.h1`
  ${font({ size: '32px', weight: '700', lineHeight: '36px' })}
`

const Container = styled.div`
  width: 100%;
`

export default Header
