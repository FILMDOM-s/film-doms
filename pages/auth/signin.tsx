import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SignIn() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    }
  }, [session])

  return (
    <div className="w-full h-screen flex justify-center mt-36">
      <div className="flex flex-col">
        <div className="w-full">
          <button
            className="text-blue-500 border-2 border-blue-500 w-full my-2 flex justify-center items-center shadow-sm hover:bg-blue-500 hover:text-white"
            onClick={() => signIn('google')}
          >
            <span className="px-2 font-bold">Google 로그인</span>
          </button>
          <button
            className="text-yellow-500 border-2 border-yellow-500 w-full my-2 flex justify-center items-center shadow-sm hover:bg-yellow-500 hover:text-white"
            onClick={() => signIn('kakao')}
          >
            <span className="px-2 font-bold">카카오 로그인</span>
          </button>
          <button
            className="text-green-500 border-2 border-green-500 w-full my-2 flex justify-center items-center shadow-sm hover:bg-green-500 hover:text-white"
            onClick={() => signIn('naver')}
          >
            <span className="px-2 font-bold">NAVER 로그인</span>
          </button>
        </div>
      </div>
    </div>
  )
}
