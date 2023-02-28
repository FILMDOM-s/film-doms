import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface Props extends Required<PropsWithChildren> {
  fallback: React.ReactNode
}

const ResetErrorBoundary = ({ children, fallback }: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => {
              return (
                <div>
                  <div>{fallback}</div>
                  <button onClick={resetErrorBoundary}>Retry</button>
                </div>
              )
            }}
          >
            {children}
          </ErrorBoundary>
        )
      }}
    </QueryErrorResetBoundary>
  )
}

export default ResetErrorBoundary
