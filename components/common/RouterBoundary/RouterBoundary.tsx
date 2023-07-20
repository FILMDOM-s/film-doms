import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { type MittEmitter } from 'next/dist/shared/lib/mitt'
import { Router } from 'next/router'
import { useEffect, type PropsWithChildren } from 'react'

const ROUTE_ERROR_CODE = {
  AUTH_ERROR: 'AUTH_ERROR',
}

const AUTH_REQUIRE_ROUTE_LIST = [
  '/mypage',
  '/write/article/movie',
  '/write/article/filmUniverse',
  '/write/article/critic',
]

const RouterBoundary = ({ children }: PropsWithChildren) => {
  const { openModal } = useSignInModal()

  useEffect(() => {
    const beforeHistoryChange: Parameters<
      MittEmitter<'beforeHistoryChange'>['on']
    >['1'] = route => {
      const isAuthRequireRoute = AUTH_REQUIRE_ROUTE_LIST.includes(route)

      if (isAuthRequireRoute) {
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
  }, [openModal])

  return <>{children}</>
}

export default RouterBoundary
