import '@/styles/globals.css'
import '@/styles/carousel.css'
import '@/styles/side-nav.css'
import { Session } from 'next-auth'
import type { AppProps } from 'next/app'
import { useCallback } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import * as gtag from 'lib/gtag'
import { startWorker } from '@/mocks'
import GlobalStyles from '@/styles/GlobalStyles'
import { AppLayout } from '@views/Layout'
import { AppScript, useStartWorker } from '@views/_App'
import { useRouterChange } from '@/hooks'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  })

  const handleRouteChange = useCallback((url: URL) => {
    gtag.pageview(url)
  }, [])

  useRouterChange(handleRouteChange)

  const { isActiveServiceWorker } = useStartWorker()

  if (!isActiveServiceWorker) {
    return <div>서비스워커가 활성화 되기 전입니다.</div>
  }

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <AppScript />
        <AppLayout>
          <Component {...pageProps} />
          <Toaster />
        </AppLayout>
      </QueryClientProvider>
    </SessionProvider>
  )
}
