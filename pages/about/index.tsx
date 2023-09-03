import { OpenGraph } from '@/components/common'
import { About } from '@/components/views/About'

const openGraphProps = {
  title: 'ABOUT',
  path: '/about',
}

export default function Index() {
  return (
    <OpenGraph {...openGraphProps}>
      <About />
    </OpenGraph>
  )
}
