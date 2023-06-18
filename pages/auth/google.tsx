import api from '@/services/api'
import { useGetGoogleAccessCode } from '@/services/auth/queries'

import axios from 'axios'
import { useRouter } from 'next/router'
import { memo, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Google = () => {
  const router = useRouter()

  // const queryString = Object.entries(router.query)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .concat()
  //   .join('&')

  // const { data, } = useGetGoogleAccessCode(queryString)

  useEffect(() => {
    ;(async () => {
      const queryString = Object.entries(router.query)
        .map(([key, value]) => `${key}=${value}`)
        .concat()
        .join('&')

      await axios
        .get(
          'https://nginx-nginx-4uvg2mlecrl7qe.sel3.cloudtype.app/login/oauth2/code/google?' +
            queryString,
          {
            withCredentials: true,
          }
        )
        .then(response => {
          // 성공적으로 응답을 받았을 때 실행되는 코드
          const { data } = response
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${data.result.accessToken}`
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
        .catch(error => {
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
  }, [router])

  return (
    <div>
      <h1>로그인 중입니다. 조금만 기다려 주세요.</h1>
    </div>
  )
}

export default memo(Google)
