import Head from 'next/head'
import Link from 'next/link'

export default function Bye() {
  return (
    <div
      style={{ height: '500px' }}
      className="flex flex-col justify-center items-center"
    >
      <Head>
        <title>필름덤즈 | BYE</title>
        <meta name="description" content="필름덤즈 로그아웃" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative text-5xl">필름덤즈</div>
      <div className="relative text-xl py-3">필름덤즈와 또 함께해주세요!</div>
      <div className="text-xl">다음에 또 만나요!</div>
      <div className="flex flex-col justify-center items-center py-3 text-blue-500">
        <Link
          className="border-b-2 border-b-white hover:border-b-blue-500 cursor-pointer"
          href="/"
        >
          {'-> '} 메인으로 이동하기
        </Link>
      </div>
    </div>
  )
}
