import { loginState } from '@/states'
import styled from '@emotion/styled'

import axios from 'axios'
import { useRouter } from 'next/router'
import { memo, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useRecoilState } from 'recoil'

const Google = () => {
  const router = useRouter()

  const [, setIsLoggedIn] = useRecoilState(loginState)

  useEffect(() => {
    ;(async () => {
      const queryString = Object.entries(router.query)
        .map(([key, value]) => `${key}=${value}`)
        .concat()
        .join('&')

      await axios
        .get(
          'https://api.filmdoms.studio/login/oauth2/code/google?' + queryString,
          {
            withCredentials: true,
          }
        )
        .then(response => {
          // 성공적으로 응답을 받았을 때 실행되는 코드
          const { data } = response
          setIsLoggedIn(true)
          toast.success('로그인 성공!', {
            icon: '👏',
            position: 'top-center',
          })
          router.push({
            pathname: data.result.type === 'SIGNUP' ? '/auth/signup' : '/',
            query: {
              from: 'google',
            },
          })
        })
        .catch(() => {
          // 오류가 발생했을 때 실행되는 코드
          toast.error('로그인에 실패했습니다. 관리자에게 문의하세요.', {
            icon: '😥',
            position: 'top-center',
          })
          router.push({
            pathname: '/',
          })
        })
    })()
  }, [router, setIsLoggedIn])

  return (
    <LoginBox>
      <h1>로그인 중입니다. 조금만 기다려 주세요.</h1>
    </LoginBox>
  )
}

export default memo(Google)

const LoginBox = styled.div`
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
