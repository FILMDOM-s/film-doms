import FallbackLoading from '@/components/common/Loading/FallbackLoading'
import { MittEmitter } from 'next/dist/shared/lib/mitt'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useRouterChange = (
  handler: Parameters<
    MittEmitter<'routeChangeComplete' | 'hashChangeComplete'>['on']
  >[1]
) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', () => {
      handler()
      handleComplete()
    })
    router.events.on('hashChangeComplete', () => {
      handler()
      handleComplete()
    })
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handler)
      router.events.off('hashChangeComplete', handler)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.events, handler])

  return {
    isLoading,
    FallbackLoading,
  }
}

export default useRouterChange
