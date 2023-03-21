import { isServer } from '@tanstack/react-query'

const workerOptions = {
  onUnhandledRequest: 'bypass',
} as const

export const startWorker = () => {
  if (isServer) {
    return (async () => {
      const { default: server } = await import('./server')
      return server.listen(workerOptions)
    })()
  } else {
    return (async () => {
      const { default: worker } = await import('./browser')
      return worker.start(workerOptions)
    })()
  }
}

export const stopWorker = () => {
  if (isServer) {
    return (async () => {
      const { default: server } = await import('./server')
      return server.close()
    })()
  } else {
    return (async () => {
      const { default: worker } = await import('./browser')
      return worker.stop()
    })()
  }
}

export const startDevWorker = () => {
  return (async () => {
    const { default: worker } = await import('./browser')
    return worker.start(workerOptions)
  })()
}
