import { useFetchBannerList } from '@/services/main'
import { mainBannerImage } from '@/assets/images/banner'
import Slider from './Slider'
import { useRouter } from 'next/router'

const Banner = () => {
  const { push } = useRouter()
  const { data: bannerList } = useFetchBannerList()

  const mainBannerList: Array<{ onClick?: VoidFunction } & Main.Banner> = [
    {
      id: 0,
      type: '나를 공유하는 공간',
      title: 'FILMDOMS`s MOVIE',
      subtitle: '',
      image: mainBannerImage,
      onClick: () => {
        push('/article/movie')
      },
    },
    ...bannerList.slice(0, 3),
  ]

  return <Slider banners={mainBannerList} />
}

export default Banner
