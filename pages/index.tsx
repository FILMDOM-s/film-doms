import { MainSwiper } from '@/components/MainSwiper'
import { NoticeSwiper } from '@/components/NoticeSwiper'
import { HomeViews } from '@views/Home'
import Head from 'next/head'
import { DefaultValue } from 'recoil'

export default function Home() {
  return (
    <>
      <Head>
        <title>필름덤즈 | HOME</title>
        <meta name="description" content="필름덤즈 NEXT WEB APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ol className='flex w-full justify-center items-center gap-10 py-6'>
          <li className='nav-font hover:text-zinc-100 transition duration-200 ease-in-out'>About</li>
          <li className='nav-font hover:text-zinc-100 transition duration-200 ease-in-out'>Movie</li>
          <li className='nav-red-font hover:text-zinc-100 transition duration-200 ease-in-out'>FilmUniverse</li>
          <li className='nav-font hover:text-zinc-100 transition duration-200 ease-in-out'>Critic</li>
        </ol>
        <MainSwiper></MainSwiper>
      </div>
      <HomeViews />
      <div className='relative py-10'>
        <div className='absolute w-full bg-black' style={{"height":"208px"}}></div>
        <div className='relative flex justify-center items-center text-white text-2xl pb-4' style={{"paddingTop":"40px"}}>Notice</div>
        <NoticeSwiper></NoticeSwiper>
      </div>
    </>
  )
}
