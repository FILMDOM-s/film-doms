import filmdoms from '../public/assets/film-doms.png'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [toggle, setToggle] = useState(false)
  const clickProfile = () => {
    setToggle(!toggle)
  }

  useEffect(() => setMounted(true), [])

  return (
    <header className="bg-white dark:bg-zinc-800 fixed top-0 left-0 right-0 z-50 py-2 border-b border-zinc-300 dark:border-white">
      <div
        className="m-auto flex h-12 items-center w-full"
        style={{ maxWidth: '1080px' }}
      >
        <div
          className="cursor-pointer font-bold text-lg xs:text-2xl flex flex-col justify-center items-center ml-4"
          onClick={() => {
            router.push('/')
          }}
        >
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <Image alt="" src={filmdoms} width={60} height={60}></Image>
          ) : (
            <Image alt="" src={filmdoms} width={60} height={60}></Image>
          )}
        </div>
        <span className="m-auto"></span>
        <div
          className="cursor-pointer mr-2 text-xs xs:text-sm flex justify-center items-center px-2 py-1 text-black rounded-md hover:text-zinc-600 transition duration-200 ease-in-out"
          onClick={() => {
            router.push('/temp')
          }}
        >
          임시 메뉴
        </div>
        {session ? (
          <div className="mr-4 flex justify-center items-center relative">
            <Image
              onClick={clickProfile}
              className="rounded-full cursor-pointer mx-2"
              alt=""
              src={session.user?.image!}
              width={30}
              height={30}
            ></Image>
            {toggle && <ProfileMenu />}
          </div>
        ) : (
          <div
            className="cursor-pointer text-xs xs:text-sm flex justify-center items-center px-2 hover:bg-zinc-50 transition duration-200 ease-in-out h-full"
            onClick={() => {
              signIn()
            }}
          >
            로그인 / 회원가입
          </div>
        )}
      </div>
    </header>
  )
}

const ProfileMenu = () => {
  const menus = [
    { title: '프로필', link: '/my' },
    { title: '로그아웃', link: '/auth/signout' },
  ]
  return (
    <ol
      style={{ border: '1px solid rgba(200,200,200,0.6)' }}
      className="absolute top-10 z-50 w-[120px] shadow-lg bg-white rounded-md overflow-hidden transition duration-200 ease-in-out"
    >
      {menus.map((menu) => (
        <Link href={menu.link} className="text-zinc-700" key={menu.title}>
          <li className="hover:bg-zinc-100 transition duration-200 ease-in-out px-4 py-2 w-full text-center text-sm text-darkGray">
            {menu.title}
          </li>
        </Link>
      ))}
    </ol>
  )
}
