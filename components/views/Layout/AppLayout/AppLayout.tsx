import { type PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'
import Header from '../Header'
import Footer from '../Footer'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`

const Main = styled.main`
  width: 100%;
  ${flex({ direction: 'column', align: 'center' })}
`

export default AppLayout
