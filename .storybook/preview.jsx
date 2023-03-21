import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import '../styles/globals.css'
import GlobalStyles from '@/styles/GlobalStyles'
import { breakpoints } from '@/styles/emotion/mediaQuery'
import { handlers } from '@/mocks/handlers/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: Object.entries(breakpoints).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          name: key,
          type: key,
          styles: {
            width: value ? `${value}px` : '365px',
            height: '100%',
          },
        },
      }),
      {}
    ),
    defaultViewport: 'mobile',
  },
  msw: handlers,
  options: {
    storySort: {
      order: ['StyleGuide', 'Default'],
    },
  },
}

// msw-storybook-addon init
initialize({
  onUnhandledRequest: 'bypass',
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retryOnMount: false,
    },
  },
})

export const decorators = [
  Story => (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Story />
    </QueryClientProvider>
  ),
  mswDecorator,
]
