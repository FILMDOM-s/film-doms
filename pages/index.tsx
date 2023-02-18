import { useFetchNotices } from '@/services/notice'
import Head from 'next/head'

export default function Home() {
  const { data } = useFetchNotices()
  console.log(data)

  return (
    <>
      <Head>
        <title>필름덤즈 | HOME</title>
        <meta name="description" content="필름덤즈 NEXT WEB APP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>test</main>
    </>
  )
}
