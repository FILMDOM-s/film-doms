import { EditorViews } from '@/components/views/Article/Write'
import { useRouter } from 'next/router'
import { Suspense } from 'react'

const Index = () => {
  const { query } = useRouter()
  const category = query.category as string

  return (
    <Suspense>
      <EditorViews category={category} />
    </Suspense>
  )
}

export default Index
