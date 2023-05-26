import styled from '@emotion/styled'
import Header from '../Header'

const Email = () => {
  return (
    <Container>
      <Header title="ID 찾기" />
    </Container>
  )
}

export default Email

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
