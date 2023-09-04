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
import Head from 'next/head'

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

  const { isLoading, FallbackLoading } = useRouterChange(handleRouteChange)

  const { isActiveServiceWorker } = useStartWorker()

  if (!isActiveServiceWorker) {
    return <FallbackLoading />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <AppScript />
        <ResetErrorBoundary fallback={<ErrorFallback />}>
          <Head>
            <title>필름덤즈</title>
          </Head>
          <AppLayout>
            <RouterBoundary>
              {isLoading && <FallbackLoading />}
              <Component {...pageProps} />
            </RouterBoundary>
            <Toaster />
          </AppLayout>
        </ResetErrorBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
