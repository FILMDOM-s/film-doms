import { MittEmitter } from 'next/dist/shared/lib/mitt'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useRouterChange = (
  handler: Parameters<
    MittEmitter<'routeChangeComplete' | 'hashChangeComplete'>['on']
  >[1]
) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handler)
    router.events.on('hashChangeComplete', handler)

    return () => {
      router.events.off('routeChangeComplete', handler)
      router.events.off('hashChangeComplete', handler)
    }
  }, [router.events, handler])
}

export default useRouterChange
