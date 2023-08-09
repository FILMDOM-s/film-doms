import { banner1, banner2, banner3, banner4 } from '@/assets/images/banner'
import Slider from './Slider'
import { useRouter } from 'next/router'

const Banner = () => {
  const { push } = useRouter()

  const mainBannerList: Array<{ onClick?: VoidFunction } & Main.Banner> = [
    {
      id: 0,
      type: '',
      title: '',
      subtitle: '',
      image: banner1,
      onClick: () => {
        push('/article/movie')
      },
    },
    {
      id: 0,
      type: '',
      title: '',
      subtitle: '',
      image: banner2,
      onClick: () => {
        push('/article/critic')
      },
    },
    {
      id: 0,
      type: '',
      title: '',
      subtitle: '',
      image: banner3,
      onClick: () => {
        push('/article/critic')
      },
    },
    {
      id: 0,
      type: '',
      title: '',
      subtitle: '',
      image: banner4,
      onClick: () => {
        push('/article/movie')
      },
    },
  ]

  return <Slider banners={mainBannerList} />
}

export default Banner
