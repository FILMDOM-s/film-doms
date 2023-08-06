import { UpdateEditorContainer } from '@/components/views/Article/Write'
import { useRouter } from 'next/router'

const Edit = () => {
  const { query } = useRouter()
  const category = query.category as string
  const id = Number(query.id)

  return <UpdateEditorContainer category={category} id={id} />
}

export default Edit
