import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { loginState, loginTypeState } from '@/states'
import { type MittEmitter } from 'next/dist/shared/lib/mitt'
import { Router, useRouter } from 'next/router'
import { useEffect, type PropsWithChildren, useRef } from 'react'
import { useRecoilState } from 'recoil'

const RouterBoundary = ({ children }: PropsWithChildren) => {
  const { openModal } = useSignInModal()
  const { pathname, replace, back } = useRouter()
  const prevPathname = useRef<string | null>(null)
  const [isLoggedIn] = useRecoilState(loginState)
  const [loginType] = useRecoilState(loginTypeState)

  useEffect(() => {
    const beforeHistoryChange: Parameters<
      MittEmitter<'beforeHistoryChange'>['on']
    >['1'] = route => {
      const isAuthRequireRoute = AUTH_REQUIRE_ROUTE_LIST.includes(route)

      if (isAuthRequireRoute) {
        if (isLoggedIn && loginType === 'none') {
          Router.events.emit('routeChangeError', {
            code: ROUTE_ERROR_CODE.LOGIN_TYPE_ERROR,
          })

          throw '추가 정보 입력이 필요합니다.'
        }

        if (!isAuthUser(route, isLoggedIn)) {
          Router.events.emit('routeChangeError', {
            code: ROUTE_ERROR_CODE.AUTH_ERROR,
          })

          throw '접근 권한이 없습니다.'
        }
      }
    }

    const routeChangeError: Parameters<
      MittEmitter<'routeChangeError'>['on']
    >['1'] = error => {
      if (!('code' in error)) {
        return
      }

      const { code } = error

      if (code === ROUTE_ERROR_CODE.AUTH_ERROR) {
        openModal()

        return
      }

      if (code === ROUTE_ERROR_CODE.LOGIN_TYPE_ERROR) {
        replace('/auth/signup?from=google')

        return
      }
    }

    Router.events.on('beforeHistoryChange', beforeHistoryChange)

    Router.events.on('routeChangeError', routeChangeError)

    return () => {
      Router.events.off('beforeHistoryChange', beforeHistoryChange)
      Router.events.off('routeChangeError', routeChangeError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  useEffect(() => {
    if (isAuthUser(pathname, isLoggedIn)) {
      prevPathname.current = pathname

      return
    }

    if (prevPathname.current === null) {
      replace('/')
      openModal()

      return
    }

    back()
    openModal()

    prevPathname.current = pathname
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isLoggedIn])

  return <>{isAuthUser(pathname, isLoggedIn) ? children : null}</>
}

export default RouterBoundary

const ROUTE_ERROR_CODE = {
  AUTH_ERROR: 'AUTH_ERROR',
  LOGIN_TYPE_ERROR: 'LOGIN_TYPE_ERROR',
}

const AUTH_REQUIRE_ROUTE_LIST = [
  '/mypage',
  '/write/article/[category]',
  '/write/article/movie',
  '/write/article/filmUniverse',
  '/write/article/critic',
]

const isAuthUser = (pathname: string, isLoggedIn: boolean) => {
  const isAuthRequireRoute = AUTH_REQUIRE_ROUTE_LIST.includes(pathname)

  if (!isAuthRequireRoute) {
    return true
  }

  if (isLoggedIn) {
    return true
  }

  return false
}
