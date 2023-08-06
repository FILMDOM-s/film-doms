import styled from '@emotion/styled'
import { colors, flexGap } from '@/styles/emotion'
import { Divider } from '@/components/common'
import Header from './Header'
import SignUpForm from './SignUpForm'
import { Suspense } from 'react'

const SignUpContainer = () => {
  return (
    <Container>
      <Divider limit="56px" size={4} color={colors.primary.orange} />
      <Header />
      <Suspense>
        <SignUpForm />
      </Suspense>
    </Container>
  )
}

const Container = styled.div`
  width: 960px;
  margin: 120px 0;
  ${flexGap('22px')}
`

export default SignUpContainer
