import styled from '@emotion/styled'
import PasswordFinder from './Password'

const Help = () => {
  return (
    <Container>
      <PasswordFinder />
    </Container>
  )
}

export default Help

const Container = styled.div`
  width: 920px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
`
