import filmdoms from '../public/assets/film-doms.png'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useTheme } from 'next-themes'
import SideNav from './SideNav'

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
    <header className="sticky top-0 left-0 right-0 z-50 py-2 bg-white dark:border-white">
      <div
        className="flex items-center w-full h-12 m-auto"
        style={{ maxWidth: '1080px' }}
      >
        <SideNav></SideNav>
        <span className="m-auto"></span>
        <div className='title'>FILMDOM's</div>
        <span className="m-auto"></span>
        {/* <div
          className="flex items-center justify-center px-2 py-1 mr-2 text-xs text-black transition duration-200 ease-in-out rounded-md cursor-pointer xs:text-sm hover:text-zinc-600"
          onClick={() => {
            router.push('/temp')
          }}
        >
          임시 메뉴
        </div> */}
        {session ? (
          <div className="relative flex items-center justify-center mr-4">
            <Image
              onClick={clickProfile}
              className="mx-2 rounded-full cursor-pointer"
              alt=""
              src={session.user?.image!}
              width={30}
              height={30}
            ></Image>
            {toggle && <ProfileMenu />}
          </div>
        ) : (
          <div
            className="flex items-center justify-center h-full px-2 text-xs transition duration-200 ease-in-out cursor-pointer xs:text-sm hover:bg-zinc-50"
            onClick={() => {
              signIn()
            }}
          >
            로그인
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
          <li className="w-full px-4 py-2 text-sm text-center transition duration-200 ease-in-out hover:bg-zinc-100 text-darkGray">
            {menu.title}
          </li>
        </Link>
      ))}
    </ol>
  )
}
