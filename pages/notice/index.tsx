import { OpenGraph } from '@/components/common'
import { useSession } from 'next-auth/react'
import Head from 'next/head'

export default function Index() {
  
  return (
    <div>
      <Head>
        <OpenGraph/>
      </Head>
      <main className="mx-auto">NOTICE</main>
    </div>
  )
}
