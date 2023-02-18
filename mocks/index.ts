import { isServer } from '@tanstack/react-query'

export const startWorker = () => {
  if (isServer) {
    ;(async () => {
      const { default: server } = await import('./server')
      server.listen()
    })()
  } else {
    ;(async () => {
      const { default: worker } = await import('./browser')
      worker.start()
    })()
  }
}
