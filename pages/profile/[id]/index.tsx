import { OpenGraph } from '@/components/common'
import { MyPageViews } from '@views/MyPage'
import { useRouter } from 'next/router'

const PublicProfilePage = () => {
  const { query } = useRouter()
  const id = query.id as string

  return (
    <OpenGraph title={'Profile'} path={`/profile/${id}`}>
      <MyPageViews id={id} />
    </OpenGraph>
  )
}

export default PublicProfilePage
