import api, { setAuthorization } from '@/services/api'
import { getAccessToken } from '@/services/auth'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const useToken = () => {
  const prevToken = Cookies.get('accessToken')
  const [token, setToken] = useState(prevToken)

  useEffect(() => {
    if (prevToken) {
      return
    }

    getAccessToken().then(({ result: { accessToken } }) => {
      setAuthorization({
        instance: api,
        token: accessToken,
      })

      setToken(accessToken)
    })
  }, [prevToken])

  return {
    token,
  }
}

export default useToken
