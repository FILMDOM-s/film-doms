import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import filmdumbs from '../public/assets/film-doms.png'

export default function Footer() {
  const router = useRouter()
  return (
    <footer
      className="py-5 text-md xs:text-md"
      style={{ borderTop: '0.5px solid rgba(230,230,230,1)' }}
    >
      <div
        className="flex justify-between mx-auto"
        style={{ maxWidth: '1080px' }}
      >
        <div>
          <Image src={filmdumbs} alt="" width={200} height={300}></Image>
        </div>
        <div className="w-full gap-2 max-w-5xl m-auto flex justify-start items-start xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs">
          <div className="flex flex-col items-center">
            <div>FOLLOW US</div>
            <ol className="p-5">
              <li>
                <Link href={'https://www.instagram.com'}>Instagram</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  )
}
