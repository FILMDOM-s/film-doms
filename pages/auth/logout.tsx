import { useSignOutAccount } from '@/services/auth'
import { loginState, loginTypeState } from '@/states'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

const Logout = () => {
  const router = useRouter()
  const { mutate } = useSignOutAccount()
  const [, setIsLoggedIn] = useRecoilState(loginState)
  const [, setLoginType] = useRecoilState(loginTypeState)

  useEffect(() => {
    mutate(null, {
      onSuccess: () => {
        setIsLoggedIn(false)
        setLoginType('none')
        router.push('/')
      },
    })
  }, [mutate, router, setIsLoggedIn, setLoginType])

  return (
    <LogoutBox>
      <h1>로그아웃 중입니다. 다음에 또 만나요! 😆</h1>
    </LogoutBox>
  )
}

export default Logout

const LogoutBox = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`
