import { type PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'
import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { loginState } from '@/states'
import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'

const AppLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const [, setIsLoggedIn] = useRecoilState(loginState)

  useQuery(
    ['/api/v1/account/profile'],
    () => {
      return api
        .get('/api/v1/account/profile', {
          method: 'GET',
          withCredentials: true,
        })
        .then(res => res.data)
    },
    {
      onSuccess(data) {
        if (!data) return
        setIsLoggedIn(true)
      },
    }
  )

  return (
    <>
      <Header />
      <Main backgroundColor={router.pathname == '/about' ? '#111111' : 'white'}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main<{ backgroundColor: string }>`
  width: 100%;
  ${flex({ direction: 'column', align: 'center' })}
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export default AppLayout
