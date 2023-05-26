import styled from '@emotion/styled'
import EmailFinder from './Email'
import PasswordFinder from './Password'

const Help = () => {
  return (
    <Container>
      {/* 기존 ID -> Email로 변경 */}
      {/* <EmailFinder /> */}
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
  justify-content: space-between;
  padding: 40px;
`
