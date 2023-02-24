import { Slider } from '@/components/common'
import { useFetchBanners } from '@/services/banner'

const Banner = () => {
  const { data: banners } = useFetchBanners()
  return <Slider type="banner" banners={banners} />
}

export default Banner
