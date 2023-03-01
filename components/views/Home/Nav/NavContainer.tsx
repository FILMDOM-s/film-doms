import { navItems } from '@/constants/constants'
import { mediaQuery } from '@/styles/emotion'
import styled from '@emotion/styled'
import Nav from './Nav'

const NavContainer = () => {
  return (
    <Container>
      {navItems.map(item => (
        <Nav key={item.text} {...item} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 15px;
  padding-bottom: 15px;

  ${mediaQuery.tablet`
    gap: 70px;
  `}

  ${mediaQuery.laptop`
    gap: 70px;
  `}

  ${mediaQuery.pc`
    gap: 140px;
  `}
`

export default NavContainer
