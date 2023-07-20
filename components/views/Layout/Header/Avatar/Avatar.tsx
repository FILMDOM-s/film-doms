import { defaultProfile } from '@/assets/images/common'
import useSignInModal from '@/components/views/Auth/SignIn/hooks/useSignInModal'
import { useToken } from '@/hooks'
import { useFetchUserInfo } from '@/services/myPage'
import { getImageSrcByUuid } from '@/utils'
import { Person } from '@svgs/common'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Avatar = () => {
  const { token } = useToken()

  return (
    <ErrorBoundary fallback={<GuestUser />}>
      <Suspense fallback={<GuestUser />}>
        {token ? <LoginUser /> : <GuestUser />}
      </Suspense>
    </ErrorBoundary>
  )
}

export default Avatar

const LoginUser = () => {
  const {
    data: { profileImage },
  } = useFetchUserInfo()

  return (
    <Link href="/mypage">
      <Image
        src={getImageSrcByUuid(profileImage?.uuidFileName ?? defaultProfile)}
        alt="user-image"
        fill
        style={{ borderRadius: '50%' }}
      />
    </Link>
  )
}

const GuestUser = () => {
  const { openModal } = useSignInModal()

  return (
    <button onClick={openModal}>
      <Person fill="#FFFFFF" />
    </button>
  )
}
