import { OpenGraph } from '@/components/common'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { id: noticeId } = router.query

  return (
    <OpenGraph>
      <main className="mx-auto">{noticeId}</main>
    </OpenGraph>
  )
}
