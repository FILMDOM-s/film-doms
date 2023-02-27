import { useFetchBanners } from '@/services/banner'
import Slider from './Slider'

const Banner = () => {
  const { data: banners } = useFetchBanners()
  return <Slider banners={banners} />
}

export default Banner
