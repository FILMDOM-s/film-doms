import { Person } from '@svgs/common'
import { useModal } from '@/hooks/useModal'
import { SignIn } from '@/components/views/Auth'
import { useFetchUserInfo } from '@/services/myPage'
import Image from 'next/image'
import { getImageSrcByUuid } from '@/utils'
import Link from 'next/link'

const Avatar = () => {
  const {
    data: { profileImage },
    error,
  } = useFetchUserInfo()

  if (error) {
    return <GuestUser />
  }

  return <LoginUser image={getImageSrcByUuid(profileImage.uuidFileName)} />
}

export default Avatar

interface LoginUserProps {
  image: string
}

const LoginUser = ({ image }: LoginUserProps) => {
  return (
    <Link href="/mypage">
      <Image
        src={image}
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
