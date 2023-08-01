import { Error as ErrorFallback, ResetErrorBoundary } from '@/components/common'
import RouterBoundary from '@/components/common/RouterBoundary'
import { useRouterChange } from '@/hooks'
import GlobalStyles from '@/styles/GlobalStyles'
import '@/styles/anime.css'
import '@/styles/carousel.css'
import '@/styles/globals.css'
import '@/styles/modal.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppLayout } from '@views/Layout'
import { AppScript, useStartWorker } from '@views/_App'
import * as gtag from 'lib/gtag'
import type { AppProps } from 'next/app'
import { useCallback } from 'react'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 0,
      },
    },
  })

  const handleRouteChange = useCallback((url: URL) => {
    gtag.pageview(url)
  }, [])

  useRouterChange(handleRouteChange)

  const { isActiveServiceWorker } = useStartWorker()

  if (!isActiveServiceWorker) {
    console.warn('Service Worker is not active')

    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        서비스워커가 활성화 되기 전입니다.
      </div>
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <AppScript />
        <ResetErrorBoundary fallback={<ErrorFallback />}>
          <AppLayout>
            <RouterBoundary>
              <Component {...pageProps} />
            </RouterBoundary>
            <Toaster />
          </AppLayout>
        </ResetErrorBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
