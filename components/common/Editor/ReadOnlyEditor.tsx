import { useImageUpload } from '@/services/file'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useMemo, useRef } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type ForwardedQuillComponent = ReactQuillProps & {
  forwardedRef: React.Ref<ReactQuill>
}

const Quill = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill')
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} theme="bubble" />
    )
    return Quill
  },
  { loading: () => <div>...loading</div>, ssr: false }
)

type EditorProps = {
  content: string
}

const ReadOnlyEditor = ({ content }: EditorProps) => {
  const quillRef = useRef<ReactQuill>(null)

  return (
    <Container
      forwardedRef={quillRef}
      theme="bubble"
      className="quill-custom"
      value={content}
      readOnly
    />
  )
}

export default ReadOnlyEditor

const Container = styled(Quill)`
  width: 100%;
  align-items: flex-end;
`
