import { HomeViews } from '@views/Home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>필름덤즈 | HOME</title>
        <meta name="description" content="영화인을 위한 문화공간" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeViews />
    </>
  )
}
