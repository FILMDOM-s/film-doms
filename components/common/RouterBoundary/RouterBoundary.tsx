import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import Cookies from 'js-cookie'
import { type MittEmitter } from 'next/dist/shared/lib/mitt'
import { Router, useRouter } from 'next/router'
import { useEffect, type PropsWithChildren, useRef } from 'react'

const RouterBoundary = ({ children }: PropsWithChildren) => {
  const { openModal } = useSignInModal()
  const { pathname, replace, back } = useRouter()
  const prevPathname = useRef<string | null>(null)

  const token = Cookies.get('accessToken')

  useEffect(() => {
    const beforeHistoryChange: Parameters<
      MittEmitter<'beforeHistoryChange'>['on']
    >['1'] = route => {
      if (!isAuthUser(route, token)) {
        Router.events.emit('routeChangeError', {
          code: ROUTE_ERROR_CODE.AUTH_ERROR,
        })

        throw '접근 권한이 없습니다.'
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
    }

    Router.events.on('beforeHistoryChange', beforeHistoryChange)

    Router.events.on('routeChangeError', routeChangeError)

    return () => {
      Router.events.off('beforeHistoryChange', beforeHistoryChange)
      Router.events.off('routeChangeError', routeChangeError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  useEffect(() => {
    if (isAuthUser(pathname, token)) {
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
  }, [pathname, token])

  return <>{isAuthUser(pathname, token) ? children : null}</>
}

export default RouterBoundary

const ROUTE_ERROR_CODE = {
  AUTH_ERROR: 'AUTH_ERROR',
}

const AUTH_REQUIRE_ROUTE_LIST = [
  '/mypage',
  '/write/article/[category]',
  '/write/article/movie',
  '/write/article/filmUniverse',
  '/write/article/critic',
]

const isAuthUser = (pathname: string, token: string | undefined) => {
  const isAuthRequireRoute = AUTH_REQUIRE_ROUTE_LIST.includes(pathname)

  if (!isAuthRequireRoute) {
    return true
  }

  if (token) {
    return true
  }

  return false
}
