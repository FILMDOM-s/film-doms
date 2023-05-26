import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

type EditorProps = {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const Editor = ({ content, setContent }: EditorProps) => {
  const modules = {
    toolbar: [
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
  }

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
      theme="snow"
      modules={modules}
      formats={formats}
      className="quill-custom"
      onChange={(content, delta, source, editor) => {
        setContent(editor.getHTML())
      }}
      value={content}
    />
  )
}

export default Editor

const Container = styled(ReactQuill)`
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
