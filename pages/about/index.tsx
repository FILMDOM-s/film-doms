import { OpenGraph } from '@/components/common'
import { About } from '@/components/views/About'

const openGraphProps = {
  title: 'ABOUT',
  url: 'https://film-doms.vercel.app/',
  path: 'about',
  image:
    'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/12d3ceb7-c251-4695-144f-ba0338ec6400/public',
}

export default function Index() {
  return (
    <OpenGraph {...openGraphProps}>
      <About />
    </OpenGraph>
  )
}
