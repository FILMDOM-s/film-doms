import Link from 'next/link'

const Nav = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} passHref>
      {text}
    </Link>
  )
}

export default Nav
