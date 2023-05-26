import { flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'

const File = () => {
  return (
    <Container>
      <FileInput type={'file'} />
    </Container>
  )
}

const Container = styled.div`
  width: 954px;
  align-items: flex-end;
`

const FileInput = styled.input`
  width: 914px;
  height: 100%;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  cursor: pointer;
`

export default File
