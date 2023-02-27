import { useRouter } from 'next/router'
import React from 'react'

const Nav = ({ text, link }: { text: string; link: string }) => {
  const router = useRouter()
  return (
      <div onClick={() => router.push(link)}>{text}</div>
  )
}

export default Nav
