import api from '@/services/api'
import styled from '@emotion/styled'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Logout = () => {
  const router = useRouter()

  useEffect(() => {}, [router])

  return (
    <LogoutBox>
      <h1>로그아웃 중입니다. 조금만 기다려 주세요.</h1>
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
