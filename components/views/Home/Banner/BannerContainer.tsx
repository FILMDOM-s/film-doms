import { Suspense } from 'react'
import Banner from './Banner'
import FallbackLoading from '@/components/common/Loading/FallbackLoading'

const BannerContainer = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Banner />
    </Suspense>
  )
}

export default BannerContainer
