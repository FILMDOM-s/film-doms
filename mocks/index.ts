import { isServer } from '@tanstack/react-query'

export const startWorker = () => {
  if (isServer) {
    return (async () => {
      const { default: server } = await import('./server')
      return server.listen()
    })()
  } else {
    return (async () => {
      const { default: worker } = await import('./browser')
      return worker.start()
    })()
  }
}
