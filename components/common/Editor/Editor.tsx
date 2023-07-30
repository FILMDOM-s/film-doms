import { useImageUpload } from '@/services/file'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useRef } from 'react'
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

type EditorProps = {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  setImageList?: React.Dispatch<React.SetStateAction<string[]>>
}

const Editor = ({ content, setContent, setImageList }: EditorProps) => {
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
            if (setImageList !== undefined && uploadedFiles.length > 0) {
              setImageList((prev: string[]) => [
                ...prev,
                getImageSrcByUuid(uploadedFiles[0].uuidFileName),
              ])
            }
            const editor = quillRef.current
              ? quillRef.current.getEditor()
              : null
            if (!editor) return
            const range = editor.getSelection()?.index ?? 0
            editor.focus()
            editor.insertEmbed(
              range,
              'image',
              getImageSrcByUuid(uploadedFiles[0].uuidFileName)
            )
            editor.setSelection(range + 1, 0)
          },
        })
      } catch (error) {}
    })
  }, [imageUpload, setImageList])

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
      onChange={setContent}
    />
  )
}

export default Editor

const Container = styled(Quill)`
  width: 914px;
  align-items: flex-end;
  border: 2px solid black;
  .ql-toolbar {
    border-bottom: 2px solid black;
  }
  .ql-editor {
    height: 400px;
  }
`
