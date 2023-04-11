import { OpenGraph } from '@/components/common'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { id: noticeId } = router.query

  return (
    <div>
      <Head>
        <OpenGraph/>
      </Head>
      <main className="mx-auto">{noticeId}</main>
    </div>
  )
}
