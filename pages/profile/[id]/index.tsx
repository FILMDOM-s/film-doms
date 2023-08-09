import { OpenGraph } from '@/components/common'
import { ProfileViews } from '@/components/views/MyPage'
import { useRouter } from 'next/router'

const PublicProfilePage = () => {
  const { query } = useRouter()
  const id = query.id as string

  return (
    <OpenGraph title={'Profile'} path={`/profile/${id}`}>
      <ProfileViews id={id} />
    </OpenGraph>
  )
}

export default PublicProfilePage
