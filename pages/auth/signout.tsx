import { signOut } from 'next-auth/react'

export default function SignOut() {
  signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/bye` })
  return (
    <div
      style={{ height: '600px' }}
      className="flex flex-col justify-center items-center"
    >
      <div>로그아웃 중이에요. 다른 페이지로 이동하지 마세요.</div>
    </div>
  )
}
