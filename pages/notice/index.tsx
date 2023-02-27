import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Index() {
  const router = useRouter()
  const { data: session } = useSession()
  useEffect(() => {}, [])

  return (
    <div>
      <Head>
        <title>필름덤즈 | NOTICE</title>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/temp`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="필름덤즈 TEMP" />
        <meta
          property="og:description"
          content="여기에 필름 덤즈 오픈그라프 설명을 입력해주세요."
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/77d77289-00a6-45d3-22be-2366f20eaa00/public"
        />
      </Head>

      <main className="mx-auto">NOTICE</main>
    </div>
  )
}
