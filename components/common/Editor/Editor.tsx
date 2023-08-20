import { useImageUpload } from '@/services/file'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useRef, useState } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import 'react-quill/dist/quill.snow.css'

type ForwardedQuillComponent = ReactQuillProps & {
  forwardedRef: React.Ref<ReactQuill>
}

const Quill = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill')
    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    )
    return Quill
  },
  { loading: () => <div>...loading</div>, ssr: false }
)

export type ImageListProps = {
  [key: string]: number
}

type EditorProps = {
  content: string
  onChangeContent: (value: string, length: number) => void
  onChangeImageList?: React.Dispatch<React.SetStateAction<ImageListProps>>
}

const Editor = ({
  content,
  onChangeContent,
  onChangeImageList,
}: EditorProps) => {
  const quillRef = useRef<ReactQuill>(null)
  const { mutate: imageUpload } = useImageUpload()

  const imageHandler = useCallback(async () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.addEventListener('change', async () => {
      try {
        const file = input.files ?? []

        imageUpload(file[0], {
          onSuccess({ result: { uploadedFiles } }) {
            const editor = quillRef.current
              ? quillRef.current.getEditor()
              : null
            if (!editor) return
            const range = editor.getSelection()?.index ?? 0
            editor.focus()

            const imageUrl = getImageSrcByUuid(uploadedFiles[0].uuidFileName)
            editor.insertEmbed(range, 'image', imageUrl)
            editor.setSelection(range + 1, 0)

            onChangeImageList?.(prev => ({
              ...prev,
              [imageUrl]: uploadedFiles[0].id,
            }))
          },
        })
      } catch (error) {}
    })
  }, [imageUpload, onChangeImageList])

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }, { header: 3 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'],

          ['link', 'image', 'video'],

          ['formula'],

          ['code-block'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }
  }, [imageHandler])

  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'header',
    'list',
    'script',
    'indent',
    'direction',
    'size',
    'color',
    'background',
    'font',
    'align',
    'clean',
    'link',
    'image',
    'video',
  ]

  return (
    <Container
      forwardedRef={quillRef}
      theme="snow"
      modules={modules}
      formats={formats}
      className="quill-custom"
      value={content}
      onChange={value =>
        onChangeContent(value, quillRef.current?.getEditor()?.getLength() ?? 0)
      }
    />
  )
}

export default Editor

const Container = styled(Quill)`
  width: 100%;
  align-items: flex-end;
  border: none;
  .ql-toolbar {
    border: none !important;
    border-top: 1px solid #eaeaea !important;
    border-bottom: 1px solid #eaeaea !important;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
  .ql-editor {
    min-height: 800px;
    border: none !important;
    font-size: 1.125rem;
  }
  .ql-container {
    border: none !important;
  }
`
