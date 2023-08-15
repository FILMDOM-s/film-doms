import styled from '@emotion/styled'
import { Parser } from 'html-to-react'

type ViewerProps = {
  title: string
  tag?: string | null | undefined
  contents: string
}

const Viewer = ({ title, tag, contents }: ViewerProps) => {
  const reactElement = Parser().parse(contents)
  return (
    <Container>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '40px',
          }}
        ></div>
        <Title>{title}</Title>
      </div>
      <TagContainer>{tag && <Tag>{tag}</Tag>}</TagContainer>
      <Contents>{reactElement}</Contents>
    </Container>
  )
}

export default Viewer

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  width: 100%;
  height: 80px;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 15px;
`

const TagContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid black;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 700;
`
