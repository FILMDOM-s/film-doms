import { navItems } from '@/constants/constants'
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
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  color: #ffffff;
  padding: 0px 96px;
  > a {
    color: #f7f7f5;
    text-decoration: none;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;
    transition: 0.2s ease-in-out;
  }
  > a:hover {
    color: #ff5414;
  }
`

export default NavContainer
