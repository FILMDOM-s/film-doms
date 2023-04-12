import { HomeViews } from '@views/Home'
import { OpenGraph } from '@/components/common'

export default function Home() {
  return (
    <OpenGraph title="HOME" description="영화인을 위한 문화공간" path="/">
      <HomeViews />
    </OpenGraph>
  )
}
