import { useEffect, useState } from 'react'
import { startWorker } from '@/mocks'

const useStartWorker = () => {
  const [isActiveServiceWorker, setIsActiveServiceWorker] = useState(false)

  useEffect(() => {
    startWorker().then(() => {
      setIsActiveServiceWorker(true)
    })
  }, [])

  return {
    isActiveServiceWorker,
  }
}

export default useStartWorker
