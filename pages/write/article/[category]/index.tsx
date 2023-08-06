import { EditorViews } from '@/components/views/Article/Write'
import { useRouter } from 'next/router'

const Index = () => {
  const { query } = useRouter()
  const category = query.category as string

  return <EditorViews category={category} />
}

export default Index
