import { defaultProfile } from '@/assets/images/common'
import { SignIn } from '@/components/views/Auth'
import { useModal } from '@/hooks/useModal'
import { useFetchUserInfo } from '@/services/myPage'
import { getImageSrcByUuid } from '@/utils'
import { Person } from '@svgs/common'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Avatar = () => {
  return (
    <ErrorBoundary fallback={<GuestUser />}>
      <Suspense fallback={<GuestUser />}>
        <LoginUser />
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
  const { openModal, closeModal } = useModal()

  const modalData = {
    title: '로그인',
    content: <SignIn closeModal={closeModal} />,
    callback: () => alert('Modal Callback()'),
  }

  return (
    <button onClick={() => openModal(modalData)}>
      <Person fill="#FFFFFF" />
    </button>
  )
}
